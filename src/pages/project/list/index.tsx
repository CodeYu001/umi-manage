import React from "react";
import { Form, Input, Select } from "antd";

import BasicBreadcrumb from "@/components/BasicBreadcrumb";
import { BasicButton, BasicTable } from "@/components";
import PageTitleWrapper from "@/components/Table/PageTitleWrapper";
import FilterComponentWrapper from "@/components/Table/FilterComponentWrapper";
import usePersistFn from "@/components/hooks/usePersistFn";
import styles from "./index.less";

const { Option } = Select;

interface ListProps {
  [key: string]: any;
}

function List({ ...props }: ListProps) {
  const columns = [
    {
      title: "序号",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "项目名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "客户名称",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "车型识别码",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "主机厂商",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "创建时间",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "项目状态",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "操作",
      key: "action",
      render: (text, record: any) => (
        <FilterComponentWrapper size="middle">
          <span className={styles.action}>查看</span>
          <span className={styles.line}>|</span>
          <span className={styles.action}>工单</span>
        </FilterComponentWrapper>
      ),
    },
  ];

  const handleSearch = usePersistFn((value) => {
    console.log("value :>> ", value);
  });

  const handlerTable = usePersistFn((value) => {
    console.log("value :>> ", value);
  });

  return (
    <div>
      <BasicBreadcrumb />
      <PageTitleWrapper>
        <Form layout="inline" onFinish={handleSearch}>
          <FilterComponentWrapper>
            <Form.Item label="项目名称" name="name">
              <Input placeholder="输入项目名称" />
            </Form.Item>
            <Form.Item label="主机厂商" name="shop">
              <Select placeholder="请选择" style={{ width: "220px" }}>
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
            <Form.Item label="状态" name="status">
              <Select placeholder="请选择" style={{ width: "220px" }}>
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <BasicButton htmlType="submit" content="查询" />
            </Form.Item>
          </FilterComponentWrapper>
        </Form>
      </PageTitleWrapper>
      <BasicTable onChange={handlerTable} columns={columns} />
    </div>
  );
}

export default React.memo<ListProps>(List);
