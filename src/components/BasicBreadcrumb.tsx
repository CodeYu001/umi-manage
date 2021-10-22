import React from "react";
import { Breadcrumb } from "antd";
import { menus } from "@/layouts/base-layout/Menus/menuConfig";
import { flattenMenus, getBreadcrumbList } from "@/utils";

export type BreadcrumbItem = {
  title: string;
  link?: string;
};
interface BasicBreadcrumbProps {
  [key: string]: any;
  separator?: string;
}
export default React.memo<BasicBreadcrumbProps>(function BasicBreadcrumb({
  separator,
  ...props
}: BasicBreadcrumbProps) {
  const BreadcrumbList: BreadcrumbItem[] = getBreadcrumbList(
    flattenMenus(menus)
  );
  return (
    <Breadcrumb
      separator={separator}
      {...props}
      style={{ marginBottom: "16px" }}
    >
      {BreadcrumbList.map(({ title, link }, index) => (
        <Breadcrumb.Item key={index}>
          {link ? <a href={link}>{title}</a> : title}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
});
