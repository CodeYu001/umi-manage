/*
 * @Author: jiaoyang.wang
 * @LastEditors: jiaoyang.wang
 * @Description: 自定义 Iconfont
 */
import React from "react";
import { createFromIconfontCN } from "@ant-design/icons";

const Iconfont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2883923_qygusijuj9p.js",
});

function Index(props: IconfontTs.IconfontProps) {
  const { type, title = "", className = "", style = {} } = props;
  return (
    <Iconfont type={type} title={title} className={className} style={style} />
  );
}
export default Index;
