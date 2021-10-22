import { Button } from "antd";
import React from "react";

import Iconfont from "@/components/Iconfont";

interface BasicButtonProps {
  [key: string]: any;
  icon?: string; //icon
}

const ButtonStyles = {
  height: "32px",
  padding: "0 16px",
  lineHeight: "32px",
  fontSize: "14px",
};
export default React.memo<BasicButtonProps>(function BasicButton({
  content,
  type = "primary",
  icon,
  ...props
}: BasicButtonProps) {
  return (
    <Button
      style={ButtonStyles}
      type={type}
      icon={icon && <Iconfont type={icon} />}
      {...props}
    >
      {content}
    </Button>
  );
});
