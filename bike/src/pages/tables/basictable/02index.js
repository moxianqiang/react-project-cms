import axios from 'axios';
import React, { memo, useState, useEffect } from 'react';
import { Card, Table } from 'antd';

export default memo(function Index() {
  const [data, setData] = useState();

  useEffect(() => {
    // 请求一个接口
    const fetchData = async () => {
      const { data } = await axios.get('http://localhost:3001/user');
      const { user } = { ...data };
      setData(user);
    };
    fetchData();
  }, []);

  const columns = [
    {
      title: 'id',
      // 列数据在数据中对应的key
      dataIndex: 'id',
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '性别',
      dataIndex: 'isMale',
      // 生成复杂的数据渲染函数
      render(isMale) {
        return isMale === true ? '男' : '女';
      },
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    {
      title: '联系方式',
      dataIndex: 'phone',
    },
  ];

  return (
    <div style={{width:"1100px"}}>
      <Card>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </Card>
    </div>
  );
});
