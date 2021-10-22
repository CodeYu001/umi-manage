/*
 * @Author: jiaoyang.wang
 * @LastEditors: jiaoyang.wang
 * @Description: 头部导航栏
 */
import React from "react";
import { Layout } from "antd";

import styles from "./index.less";
import ProfileCard from "@/components/ProfileCard";

const { Header } = Layout;

function Headers() {
  return (
    <Header className={styles.headerWrap}>
      <div className={styles.logo}></div>
      <div className={styles.right}>
        <ProfileCard />
      </div>
    </Header>
  );
}

export default Headers;
