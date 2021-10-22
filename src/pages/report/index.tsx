import React from "react";
import { Redirect } from "umi";

const Report = () => {
  return <Redirect to="/report/list" />;
};

export default React.memo(Report);
