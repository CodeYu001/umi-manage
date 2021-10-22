import React, { useMemo } from "react";
import classNames from "classnames";
import { Table, TablePaginationConfig, PaginationProps } from "antd";
import { defaultColumns, defaultData } from "@/data/index";
import styles from "./index.less";

interface BasicTableProps {
  [key: string]: any;
  columns?: any[];
  data?: any[];
  className?: string;
  pagination?: TablePaginationConfig;
}

export default React.memo(function BasicTable({
  columns = defaultColumns,
  data = defaultData,
  className,
  ...props
}: BasicTableProps) {
  const showTotal: PaginationProps["showTotal"] = (total) => {
    return <span>共 {total} 条</span>;
  };
  const pagination = useMemo<TablePaginationConfig>(
    () => ({
      ...props.pagination,
      total: 50,
      showSizeChanger: true,
      size: "default",
      position: ["bottomRight"],
      showTotal,
      pageSizeOptions: ["10", "15", "30", "50", "100"],
    }),
    []
  );

  return (
    <Table
      {...props}
      columns={columns}
      dataSource={data}
      className={classNames(className, styles.wrapper)}
      pagination={pagination}
    />
  );
});
