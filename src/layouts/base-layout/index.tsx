import React from "react";
import { Layout } from "antd";

import Menus from "./Menus";
import Header from "./Header";
import Logo from "./Logo";

import styles from "./index.less";

const { Content, Sider } = Layout;

interface Props {
  children: any;
  history: any;
  className: any;
}

function BaseLayout(props: Props) {
  const { children } = props;

  return (
    <Layout className={styles.layoutWrap}>
      <Sider className={styles.sideBar} width={200}>
        <Logo />
        <Menus {...props} />
      </Sider>
      <Layout>
        <Header />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}

export default React.memo<Props>(BaseLayout);
