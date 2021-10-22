import React from "react";

interface PageTitleWrapperProps {
  [key: string]: any;
}

const styles = {
  padding: "28px 26px 24px",
  background: "#fff",
  marginBottom: "16px",
};

const PageTitleWrapper = ({ children }: PageTitleWrapperProps) => {
  return <div style={styles}>{children}</div>;
};
export default React.memo<PageTitleWrapperProps>(PageTitleWrapper);
