import React from "react";
import { Form, Input, Select } from "antd";

import BasicBreadcrumb from "@/components/BasicBreadcrumb";
import { BasicButton, BasicTable } from "@/components";
import PageTitleWrapper from "@/components/Table/PageTitleWrapper";
import FilterComponentWrapper from "@/components/Table/FilterComponentWrapper";
import usePersistFn from "@/components/hooks/usePersistFn";
import TableTitle from "@/components/Table/TableTitle";

const { Option } = Select;

interface ListProps {
  [key: string]: any;
}

function List({ ...props }: ListProps) {
  const handleSearch = usePersistFn((value) => {
    console.log("value :>> ", value);
  });

  const handlerTable = usePersistFn((value) => {
    console.log("value :>> ", value);
  });

  return (
    <>
      <BasicBreadcrumb />
      <PageTitleWrapper>
        <Form layout="inline" onFinish={handleSearch}>
          <FilterComponentWrapper>
            <Form.Item label="角色名称" name="name">
              <Input placeholder="请输入角色名称查询" />
            </Form.Item>
            <Form.Item>
              <BasicButton htmlType="submit" content="查询" />
            </Form.Item>
          </FilterComponentWrapper>
        </Form>
      </PageTitleWrapper>
      <PageTitleWrapper>
        <TableTitle
          title="角色列表"
          content={<BasicButton style={{ float: "right" }} content="新建" />}
        />
        <BasicTable onChange={handlerTable} />
      </PageTitleWrapper>
    </>
  );
}

export default React.memo<ListProps>(List);
