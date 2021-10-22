import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import { message } from "antd";
import Cookies from "js-cookie";
import { cloneDeep } from "lodash";

import { session } from "@/utils";

const LOGIN_USER_STORAGE_KEY = "login-user";
const { localStorage, sessionStorage } = window;

const codeMessage: Record<string, any> = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
  999: "服务器未授权的请求",
};

interface HttpResponse {
  status: number;
  data: any;
  statusCode: string;
  statusText: string;
  message?: string;
}

interface HttpResponseResult {
  status?: number; // http status 正常返回200
  code?: string;
  message?: string; // 信息 通常对于 http正文 或 error 中的错误信息
  meta?: any; // 后端结果针对请求的标准请求内容
  body?: any; // 返回正文内容
  data?: any; // 对应body内的data 数据结构
  error?: Error;
  success: boolean; // 业务级成功或失败，失败情况下 需要通过code 进行二次过滤
}

// 请求头增加 Authorization
axios.interceptors.request.use(
  (cfg) => {
    const jwt = Cookies.get("token");
    const cfgMid = cloneDeep(cfg);
    if (jwt !== undefined) {
      cfgMid.headers.Authorization = `Bearer ${jwt}`;
    }
    return cfgMid;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 登录失效跳转登录页，清空用户信息
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        sessionStorage.clear();
        session.clear();
        localStorage.setItem(LOGIN_USER_STORAGE_KEY, "");
        window.location.href = "/login";
      }
    }
    return error.response;
  }
);

/**
 * 统一处理为  HttpResponseResult
 * @param {*} response
 */
function checkStatus(response: HttpResponse): HttpResponseResult {
  const result: HttpResponseResult = {
    status: response.status,
    success: false,
  };
  const status = response.status || 999;
  let message = "";
  const code = response?.data?.code;
  // code === 0：成功，校验数据格式是否正确
  // code > 0：请求有误
  if (code === 0) {
    result.success = true;
    return checkBody(result, response.data);
  } else {
    message = response?.data?.message || codeMessage[status];
  }
  result.message = message;
  result.error = response?.data?.error;
  return result;
}

/**
 * 检查返回内容格式是否符合要求
 */

function checkBody(result: HttpResponseResult, body: any): HttpResponseResult {
  const resultMid = cloneDeep(result);
  if (!body) {
    resultMid.success = false;
    return resultMid;
  }
  // body 如果不是json 格式 则 返回错误
  resultMid.body = body;
  let jsonBody = body;
  if (typeof body === "string" && body[0] === "{") {
    try {
      jsonBody = JSON.parse(body);
    } catch (e: any) {
      resultMid.success = false;
      resultMid.error = e;
      resultMid.message = e.message || e.toString();
      return resultMid;
    }
  }
  resultMid.body = jsonBody;
  resultMid.data = jsonBody.data;
  return resultMid;
}

/**
 * 支持跨域
 * 支持状态检查
 * @param {*} url 请求地址
 * @param {*} options 请求参数
 */
export async function request(
  options: AxiosRequestConfig
): Promise<HttpResponseResult> {
  const newOptions: AxiosRequestConfig = {
    ...options,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...options.headers,
    },
  };

  try {
    const response: any = await axios.request(newOptions);
    const result: HttpResponseResult = checkStatus(response);
    if (!result.success) {
      message.error(result.message);
    }
    return result;
  } catch (e) {
    return {
      status: 500,
      success: false,
      error: e,
      message: "未知错误",
    };
  }
}

export const post = (
  url: string,
  data?: any,
  headers?: any,
  onUploadProgress?: (progressEvent: any) => void
) => {
  return request({
    url,
    method: "POST",
    data,
    headers,
    onUploadProgress,
  });
};

export const get = (url: string, params?: any, headers?: any) => {
  return request({
    url,
    params,
    headers,
  });
};

export const put = (url: string, data?: any) => {
  return request({
    url,
    method: "PUT",
    data,
  });
};

export const del = (url: string, data?: any) => {
  return request({
    url,
    method: "DELETE",
    data,
  });
};
