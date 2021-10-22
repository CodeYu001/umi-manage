import React from "react";
import "./index.less";

interface StrokeTitleComponentProps {
  title: string;
  className?: string;
}
export default React.memo(function StrokeTitleComponent({
  title,
  className = "strokeBox",
}: StrokeTitleComponentProps) {
  return (
    <div className={`svg-border-animation ${className}`}>
      <svg
        viewBox="0 0 80 32"
        style={{ height: "70px" }}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect className="shape" height="32" width="80"></rect>
      </svg>
      <div className="hover-text">{title}</div>
    </div>
  );
});
