import React from 'react';
import { Card, Button, message } from 'antd';
import '../../ui.less'
// 函数式组件
export default function Index() {
  const showMessage = (type) => {
    message[type]('芳芳老师喊你来上课了')
  }

  return(
    <div>
      <Card title="全局提示框" className="card-warp">
        <Button type="primary" onClick={()=>{showMessage('success')}}>
          Success
        </Button>
        <Button type="primary" onClick={()=>{showMessage('info')}}>
          info
        </Button>
      </Card>
    </div>
  )
}
