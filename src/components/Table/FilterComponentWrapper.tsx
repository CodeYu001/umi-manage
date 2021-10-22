import React from "react";

import { Space, SpaceProps } from "antd";

export default function FilterComponentWrapper({
  children,
  size = "large",
  ...props
}: SpaceProps) {
  return (
    <div style={{ overflow: "hidden", position: "relative", width: "100%" }}>
      <Space wrap style={{ width: "100%" }} {...props} size={size}>
        {children}
      </Space>
    </div>
  );
}
