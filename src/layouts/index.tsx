import React, { useMemo } from "react";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";

import EmptyLayout from "./empty-layout";
import BaseLayout from "./base-layout";

import styles from "./index.less";
import { AppContext } from "@/contexts";

const LayoutMain = (props: any) => {
  const { location, children, history, ..._props } = props;
  const userInfo = { userName: "dylan" };

  const isEmptyLayout = useMemo(() => {
    const { pathname = "/" } = location;
    const matchPathNames = ["/", "/login"];
    return !pathname || matchPathNames.indexOf(pathname) > -1;
  }, [location]);

  const app = useMemo(() => {
    if (isEmptyLayout) {
      return {
        type: "default",
        view: children,
        Layout: EmptyLayout,
      };
    }
    return {
      type: "default",
      view: children,
      Layout: BaseLayout,
    };
  }, [location, children, isEmptyLayout]);

  return (
    <AppContext.Provider value={{ userInfo }}>
      <ConfigProvider locale={zhCN}>
        <app.Layout
          className={styles.root}
          {..._props}
          location={location}
          children={app.view}
        />
      </ConfigProvider>
    </AppContext.Provider>
  );
};

export default LayoutMain;
