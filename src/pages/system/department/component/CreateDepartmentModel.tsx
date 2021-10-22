import React from "react";
import { Form, Input, Select, Modal } from "antd";

interface CreateDepartmentModelProps {
  [key: string]: any;
  show: boolean;
  handleCancel: () => void;
}
const CreateDepartmentModel = ({
  show,
  handleCancel,
}: CreateDepartmentModelProps) => {
  return (
    <Modal
      title="创建部门"
      visible={show}
      // onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default React.memo<CreateDepartmentModelProps>(CreateDepartmentModel);
