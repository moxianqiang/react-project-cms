import React, { Component } from 'react';
import { Menu } from 'antd';
import { connect } from 'react-redux';
// menuConfig是模拟后台返回的导航菜单json
import menuConfig from '@/config/menuConfig';
import { Link } from 'react-router-dom';
import { swicthMenuAction } from '@/store/actionCreaters';

import './index.less';
// 有二级菜单的组件
const SubMenu = Menu.SubMenu;

class Navigate extends Component {
  constructor() {
    super();
    this.state = {
      theme: 'dark',
      menuItem: '',
    };
  }

  // 获取菜单
  componentDidMount() {
    // menuConfig是模拟后台返回的导航菜单json，通过getMenuItem方法渲染导航组件
    const menuItem = this.getMenuItem(menuConfig);
    console.log(menuItem);
    this.setState({
      menuItem: menuItem,
    });
  }
  // 获取菜单 递归
  getMenuItem = (data) => {
    return data.map((item) => {
      // 有子菜单
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {/* 递归渲染二级、三级...... */}
            { this.getMenuItem(item.children) }
          </SubMenu>
        );
      }
      // 无子菜单
      return (
        <Menu.Item
          title={item.title}
          key={item.key}
          onClick={(e) => {
            this.switchMenu(item.title);
          }}
        >
          {/*  最终会被渲染成a标签 */}
          <Link to={item.key}>{item.title}</Link>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="logo">
          {/* public 目录 最后会打包生成目录，一般我们会把静态资源放到public下面，public文件夹是不会部署的 */}
          <img src="/assets/logo.png" alt="" />
        </div>

        {/* 菜单 */}
        <Menu theme={this.state.theme}>{this.state.menuItem}</Menu>
      </div>
    );
  }
  // 点击菜单触发的事件，点到哪个菜单就将当前的菜单名字传给redux的store对象
  switchMenu(menuName) {
    console.log('看看:',this.props);
    // 因为入口组件被<Provider store={store}></Provider>包裹，所以能结构出dispatch
    const { dispatch } = this.props;
    // redux，派发action
    dispatch(swicthMenuAction(menuName));
  }
}
/* 
4个参数 都是可选参数
mapStateToProps:这个函数允许我们将store的数据作为props绑定在组件上
mapDispatchToProps: 这个函数的功能将action作为props绑定到组件上
*/
export default connect()(Navigate);
