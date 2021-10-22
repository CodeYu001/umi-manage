import React from "react";
import { Redirect } from "umi";

const WorkOrder = () => {
  return <Redirect to="/workOrder/list" />;
};

export default React.memo(WorkOrder);
