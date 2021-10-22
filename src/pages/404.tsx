import React from 'react';
import { Result, Button } from 'antd';
import { withRouter } from 'react-router-dom';

interface PropsType {
  history: any;
}

function NotFoundPage(props: PropsType) {
  const { history } = props;
  return (
    <Result
      style={{ padding: 0 }}
      status={404}
      title="404"
      subTitle="对不起，您访问的页面不存在。"
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          返回首页
        </Button>
      }
    />
  );
}

export default withRouter(NotFoundPage);
