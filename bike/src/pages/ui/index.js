import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import '@/pages/ui/ui.less'

// 通过路由跳转渲染的组件，会给props添加rouet属性，里面有routes
export default memo(function Index(props) {
  console.log(props);
  // 渲染子路由 主要作用就是渲染子路由
  const { route } = props;
  return (
    <div className="ui-wrap">
      {/* 二级菜单的出口 */}
      { renderRoutes(route.routes) }
    </div>
  );
});
