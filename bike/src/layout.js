import React, { Component } from 'react'
import { connect } from 'react-redux'

import { renderRoutes } from 'react-router-config';
import routes from './router'

class Layout extends Component {
  // renderRoutes传入的参数是数组，renderRoutes(routes[2])这样传入的是对象
  render() {
    console.log('Layout走了');
    console.log(this.props.isLogin);
    return (
      <div>
        {
          this.props.isLogin 
          ? renderRoutes([routes[2]])
          : renderRoutes([routes[0], routes[1]])
        }
      </div>
    )
    // 点击登录进到后台，点刷新按钮，页面显示不了内容？
    // 此时已经根据路由匹配到要加载的组件了，但是由于刷新后，react里的开关为false，
    // 因此渲染的是login组件，而不是admin组件，因此路由地址没有出口展示，所以页面空白
  }
}

const mapStateToProps = (state)=>({
  isLogin: state.isLogin
})

export default connect(mapStateToProps)(Layout);