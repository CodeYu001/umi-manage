import React from "react";
import { Redirect } from "umi";

const Project = () => {
  return <Redirect to="/project/list" />;
};

export default React.memo(Project);
