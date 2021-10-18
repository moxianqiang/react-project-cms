import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Utils from '@/utils/utils';
import request from '@/axios/requeset';
import { connect } from 'react-redux';
import './index.less';

import { isLoginAction } from '@/store/actionCreaters';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      time: '',
      weather: '',
      getStoreMessage:''
    };
  }

  // 生命周期，挂载完成
  async componentDidMount() {
    console.log('this.props有什么：',this.props,'---------------');
    this.setState({
      username: 'Morris',
    });

    // 动态时间
    this.timer = setInterval(() => {
      let newtime = Utils.forMateTime(new Date());
      this.setState({
        time:newtime,
      });
    }, 1000);

    // 请求天气接口 promise then 同步的方式去写异步代码 / aysnc await
    const data = await request({
      // 参数
      params: {
        appid: '39667296',
        appsecret: 'mVbfu89d',
        city: '深圳',
      },
    });
    // console.log('请求天气接口返回的信息：',data);
    this.setState({
      weather: data.data.wea,
    });
  }
  // 生命周期，销毁
  componentWillUnmount(){
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>欢迎，{this.state.username}</span>
            <a href="/" onClick={this.handleLoginOut}>退出登录</a>
          </Col>
        </Row>

        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">
            {/* 面包屑 */}
            {this.props.menuName}
          </Col>
          <Col span="20" className="weather">
            <span className="date">{this.state.time}</span>
            <span className="detail">{this.state.weather}</span>
          </Col>
        </Row>
      </div>
    );
  }

  handleLoginOut = ()=>{
    const { dispatch } = this.props;
    dispatch(isLoginAction(false));
  }
}

const mapStateToProps = (state)=>({
  // 当前Header组件的状态 : store对象的状态（形参state） 把store对象的状态映射到本组件状态menuName
  menuName: state.menuName,
  getStoreMessage: state.myMessage
})
// 4个参数：mapStateToProps，mapActionToProps,......  都是可选的
export default connect(mapStateToProps)(Header);
