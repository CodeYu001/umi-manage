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
            <Form.Item label="用户信息" name="name">
              <Input placeholder="支持账号名/用户姓名查询" />
            </Form.Item>
            <Form.Item label="手机号" name="phone">
              <Input placeholder="请输入手机号查询" />
            </Form.Item>
            <Form.Item label="状态" name="status">
              <Select placeholder="请选择" style={{ width: "220px" }}>
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <BasicButton htmlType="submit" content="查询" />
            </Form.Item>
          </FilterComponentWrapper>
        </Form>
      </PageTitleWrapper>
      <PageTitleWrapper>
        <TableTitle
          title="用户列表"
          content={
            <BasicButton
              style={{ float: "right" }}
              content="新建"
              icon="icon-warning-circle"
            />
          }
        />
        <BasicTable onChange={handlerTable} />
      </PageTitleWrapper>
    </>
  );
}

export default React.memo<ListProps>(List);
