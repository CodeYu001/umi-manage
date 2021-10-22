import React, { useState } from "react";
import { Form, Input, Select, Modal } from "antd";

import BasicBreadcrumb from "@/components/BasicBreadcrumb";
import { BasicButton, BasicTable } from "@/components";
import PageTitleWrapper from "@/components/Table/PageTitleWrapper";
import FilterComponentWrapper from "@/components/Table/FilterComponentWrapper";
import usePersistFn from "@/components/hooks/usePersistFn";
import TableTitle from "@/components/Table/TableTitle";
import CreateDepartmentModel from "./component/CreateDepartmentModel";

interface ListProps {
  [key: string]: any;
}

function List({ ...props }: ListProps) {
  const [show, setShow] = useState(false);

  const handleSearch = usePersistFn((value) => {
    console.log("value :>> ", value);
  });

  const handlerTable = usePersistFn((value) => {
    console.log("value :>> ", value);
  });

  const handleCreate = usePersistFn(() => {
    setShow(true);
  });

  const handleCancel = usePersistFn(() => {
    setShow(false);
  });

  return (
    <>
      <BasicBreadcrumb />
      <PageTitleWrapper>
        <Form layout="inline" onFinish={handleSearch}>
          <FilterComponentWrapper>
            <Form.Item label="部门名称" name="name">
              <Input placeholder="请输入部门名称查询" />
            </Form.Item>
            <Form.Item>
              <BasicButton htmlType="submit" content="查询" />
            </Form.Item>
          </FilterComponentWrapper>
        </Form>
      </PageTitleWrapper>
      <PageTitleWrapper>
        <TableTitle
          title="部门列表"
          content={
            <BasicButton
              style={{ float: "right" }}
              content="新建"
              onClick={handleCreate}
            />
          }
        />
        <BasicTable onChange={handlerTable} />
      </PageTitleWrapper>

      <CreateDepartmentModel show={show} handleCancel={handleCancel} />
    </>
  );
}

export default React.memo<ListProps>(List);
