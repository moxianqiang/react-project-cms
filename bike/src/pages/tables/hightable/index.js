import React, { memo } from 'react'
import {Card,Table} from 'antd'

export default memo(function index() {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      width:180,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      width:200
    },
    {
      title: '地址',
      dataIndex: 'address',
      width:400
    },
  ];

  const data = [];
  // 模拟数据
  for(let i = 0;i<101;i++){
    data.push({
      key:i,
      name:`芳芳老师${i}`,
      age:18,
      address:`吃饭大街${i}号`
    })
  }

  return (
    <div>
      <Card title="头部固定">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{pageSize:30}}
          scroll={{y:400}}
        />
      </Card>
    </div>
  )
})
