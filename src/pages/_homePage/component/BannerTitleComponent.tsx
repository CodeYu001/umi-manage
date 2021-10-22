import React from "react";

interface BannerTitleComponentProps {
  [key: string]: any;
}

const styles = {
  height: "166px",
  lineHeight: "166px",
  fontSize: "32px",
};

export default React.memo<BannerTitleComponentProps>(
  function BannerTitleComponent({
    children,
    ...props
  }: BannerTitleComponentProps) {
    return <div style={{ textAlign: "center", ...styles }}>{children}</div>;
  }
);
