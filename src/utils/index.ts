export * from "./request";
export * from "./storage";

import { BreadcrumbItem } from "@/components/BasicBreadcrumb";
import _ from "lodash";
/**
 * 如果是 null undefined {} [] "" 则返回 true  其他都是 false
 * @param value
 * @returns {boolean}
 */
export const isNilEmpty = (value: any): boolean => {
  if (_.isString(value)) {
    return value.length === 0;
  }
  if (_.isObject(value)) {
    return _.isEmpty(Object.keys(value));
  }
  if (_.isArray(value)) {
    return _.isEmpty(value.length);
  }
  return _.isNil(value);
};

/**
 * 扁平化 mens
 * @param arr
 * @returns {Array}
 */
export const flattenMenus = (arr: any[]): any[] =>
  arr.reduce(function (prev, item) {
    prev.push(item);
    return prev.concat(
      Array.isArray(item.children) ? flattenMenus(item.children) : []
    );
  }, []);

/**
 * 获取面包屑 数据结构
 * @param flattenMenu 扁平化 menus 数据
 * @return {Array}
 */
export function getBreadcrumbList(flattenMenu: any[]): BreadcrumbItem[] {
  const pathList = location.pathname.match(/[^/]+/g) ?? [];
  let result: BreadcrumbItem[] = [];
  pathList.reduce((pre, cur) => {
    const pathSection = `${pre}/${cur}`;
    const { title, parent, link } = flattenMenu.find(
      (item) => item.link === pathSection || item.key === pathSection
    );
    result.push({ link: parent ? "" : link, title });
    return pathSection;
  }, "");
  return result;
}
