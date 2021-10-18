import React, { memo } from 'react';
import { Card, Table } from 'antd'

export default memo(function Index() {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '刘德华',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ]; 

  return (
    <div>
      <Card title="基础表格">
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
        />
      </Card>
    </div>
  )
})
