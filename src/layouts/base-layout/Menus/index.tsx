/*
 * @Author: jiaoyang.wang
 * @LastEditors: jiaoyang.wang
 * @Description: 侧边栏
 */
import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link } from "umi";
import { difference } from "lodash";

import Iconfont from "@/components/Iconfont";
import type { MenuType } from "./menuConfig";
import { menus } from "./menuConfig";

import styles from "./index.less";

const { SubMenu } = Menu;

export default React.memo(function Menus(props: any) {
  const { location: { pathname = "/" } = {} } = props;
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  useEffect(() => {
    setSelectedKeys([pathname]);
    const parentKey: string = pathname.split("/")[1] || "";
    setOpenKeys([`/${parentKey}`]);
  }, [pathname]);

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onOpenChange={(keys: string[]) => {
        setOpenKeys(difference(keys, openKeys));
      }}
      className={styles.menu}
    >
      {menus.map((menu: MenuType) => {
        const { key, link, title, icon } = menu;
        if (!menu.children) {
          return (
            <Menu.Item
              key={link}
              icon={<Iconfont className={styles.menuIcon} type={icon} />}
            >
              <Link to={link as string}>{title}</Link>
            </Menu.Item>
          );
        }

        return (
          <SubMenu
            key={key}
            icon={<Iconfont className={styles.menuIcon} type={icon} />}
            title={title}
          >
            {menu.children.map((val: any) => (
              <Menu.Item key={val.link}>
                <Link to={val.link}>{val.title}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        );
      })}
    </Menu>
  );
});
