import React, { Component } from 'react';
import { Row, Col } from 'antd';
// 渲染路由出口的插件
import { renderRoutes } from 'react-router-config'

import Header from './components/header';
import Navigate from './components/navigate';
import Footer from './components/footer';

import './style/common.less'

export default class Admin extends Component {
  constructor(props){
    super(props);
    this.state = {}
    console.log('Admin中的props：',props);
  }

  render() {
    return (
      <div>
        <Row className="container">
          <Col span="4" className="nav-left">
            {/* 左侧--导航栏 */}
            <Navigate />
          </Col>
          <Col span="20" className="main">
            {/* 右侧--头 */}
            <Header />
            {/* 右侧--身体 */}
            <Row className="content">
              {/* 渲染路由出口 /home这一层 */}
              {renderRoutes(this.props.route.routes)}
            </Row>
            {/* 右侧--脚 */}
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}
