import React from "react";
import BannerTitleComponent from "./BannerTitleComponent";

interface BannerBoxWrapperProps {
  title: string;
  children: JSX.Element;
  style: React.CSSProperties;
}
export default function BannerBoxWrapper({
  title,
  children,
  ...props
}: BannerBoxWrapperProps) {
  return (
    <div style={props.style}>
      <BannerTitleComponent>{title}</BannerTitleComponent>
      {children}
    </div>
  );
}
