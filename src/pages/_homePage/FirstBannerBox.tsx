import React, { useContext, useState } from "react";
import LogoUrl from "@/sources/images/logo.png";
import BasicButton from "@/components/BasicButton";
import usePersistFn from "@/components/hooks/usePersistFn";
import { useHistory } from "react-router-dom";
// import server from "./server";
import { USER_REQUEST_STATUS } from "@/constants";
import ProfileCard from "@/components/ProfileCard";
import { isNilEmpty } from "@/utils";
import { AppContext } from "@/contexts";

interface paramsItem {
  token?: string;
}

export default React.memo<paramsItem>(function FirstBannerBox() {
  const { userInfo } = useContext<any>(AppContext);
  const history = useHistory();
  const [loginLoading, setLoginLoading] = useState(false);
  const [useLoading, setUseLoading] = useState(false);
  const token = localStorage.getItem("token");

  const handleStart = usePersistFn(async (params) => {
    history.push("/project");
    // const setLoading =
    //   params.way === USER_REQUEST_STATUS["LOGIN"]
    //     ? setLoginLoading
    //     : setUseLoading;
    // setLoading(true);
    // server.getUser(params).then((res: any) => {
    //   if (res?.userName) {
    //     // 用户已登陆跳转 兼容性审核认证平台
    //     history.push("/basic/index");
    //     return;
    //   }
    //   window.location.href = res;
    // });
  });

  return (
    <div className="first-banner">
      <div className="top-title-box">
        <img src={LogoUrl} alt="亿咖通logo" />
        <span className="top-title-box-title">兼容性审核认证</span>
        <div className="operation-box">
          {userInfo?.userName && !isNilEmpty(token) ? (
            <ProfileCard userName={userInfo.userName} />
          ) : (
            <BasicButton
              content="登录"
              onClick={() =>
                handleStart({ way: USER_REQUEST_STATUS["LOGIN"], type: 3 })
              }
              loading={loginLoading}
            />
          )}
        </div>
      </div>
      <div className="first-banner-content">车机审核认证平台</div>
      <BasicButton
        className="first-banner-button"
        content="立即使用"
        onClick={() =>
          handleStart({ way: USER_REQUEST_STATUS["IMMEDIATE_USE"], type: 3 })
        }
        loading={useLoading}
      />
    </div>
  );
});
