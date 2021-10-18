import React, { Component } from 'react'

import { Form, Input, Button, Checkbox } from 'antd';

// redux相关的引入
import { isLoginAction } from '@/store/actionCreaters';
import { connect } from 'react-redux';

// 登录要用的请求
import axios from 'axios';

import './login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'moxianqiang',
      password: '13650780459'
    }
  }

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  }

  // antd 复制的
  onFinish = (values) => {
    console.log('Success:', values);
  };
  // antd 复制的
  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return (
      <div className="container">
        <div className="username-password">
          <p>欢迎登录CMS管理后台</p>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input name="username" value={this.state.username} onChange={this.handleChange} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password name="password" value={this.state.password} onChange={this.handleChange} />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" onClick={this.handleLogin}>
                Submit
              </Button>
            </Form.Item>
          </Form>
          <br />
          <p>登录前开启node本地服务，然后直接点击Submit即可</p>
        </div>
      </div>
    )
  }

  // 这里不用 async await，原因还是在Admin.js中renderRoutes(this.props.route.routes)要渲染this.props.route.routes，而不是/router/index.js的routes
  handleLogin = async () => {
    const data = await axios({
      method:'post',
      url:`http://localhost:3001/login`,
      data:this.state
    })
    console.log('data:', data);
    if (data.data.status === 200) {
      console.log(this.state);
      const { dispatch } = this.props;
      dispatch(isLoginAction(true));
      this.props.history.push('/admin/user')
    }
  }
}

export default connect()(Login);