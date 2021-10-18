import axios from 'axios';
import React, { Component } from 'react';
import { Card, Table } from 'antd';

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
    };
  }
  
  async componentDidMount() {
    const { data } = await axios.get('http://localhost:3001/user');
    console.log(data);
    this.setState({
      data: data.user,
    });
  }

  render() {
    const columns = [
      {
        title: 'id',
        // 列数据在数据中对应的key
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
      },
      {
        title: '性别',
        dataIndex: 'isMale',
        key: 'isMale',
        // 生成复杂的数据渲染函数
        render(isMale) {
          return isMale === true ? '男' : '女'
        }
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: '联系方式',
        dataIndex: 'phone',
        key: 'phone'
      },
    ];

    return (
      <div>
        <Card>
          <Table
            columns={columns}
            dataSource={this.state.data}
            pagination={true}
          />
        </Card>
      </div>
    );
  }
}
