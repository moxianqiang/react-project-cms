import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

export default memo(function Index(props) {
  const { route } = props;
  return (
    <div>
      <h2>table的二级渲染出口↓↓↓</h2>
      { renderRoutes(route.routes) }
    </div>
  )
})
