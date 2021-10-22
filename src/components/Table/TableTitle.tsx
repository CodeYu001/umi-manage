import React from "react";
import BasicButton from "../BasicButton";

interface TableTitleProps {
  title: string;
  content?: React.ReactNode;
}

export default function TableTitle({ title, content }: TableTitleProps) {
  return (
    <div style={{ overflow: "hidden", marginBottom: "16px" }}>
      <h3 style={{ float: "left" }}>{title}</h3>
      {content}
    </div>
  );
}
