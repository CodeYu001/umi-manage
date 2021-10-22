import React from 'react';

interface Props {
  children: any;
}

function EmptyLayout(props: Props) {
  const { children } = props;

  return (
    <div style={{ height: '100%', width: '100%', overflow: 'auto' }}>
      {children}
    </div>
  );
}

export default EmptyLayout;
