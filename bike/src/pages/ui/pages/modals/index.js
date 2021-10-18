import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      showModal1: false,
      showModal2: false,
    };
  }

  render() {
    return (
      <div>
        <Card title="基础对话框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleOpen('showModal1')}>
            Open</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal2')}>
            自定义页脚</Button>
        </Card>

        <Card title="信息确认框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleConfirm('confirm')}>
            Open</Button>
          <Button type="primary" onClick={() => this.handleConfirm('info')}>
            info</Button>
          <Button type="primary" onClick={() => this.handleConfirm('success')}>
            success</Button>
          <Button type="primary" onClick={() => this.handleConfirm('warning')}>
            warning</Button>
        </Card>

        <Modal
          title="React"
          visible={this.state.showModal1}
          onOk={() => {
            this.setState({
              showModal1: false,
            });
          }}
          onCancel={() => {
            this.setState({
              showModal1: false,
            });
          }}
        >
          <p>芳芳老师喊你来学习react</p>
        </Modal>

        <Modal
          title="React"
          visible={this.state.showModal2}
          okText="好的"
          cancelText="哈哈哈"
          onOk={() => {
            this.setState({
              showModal2: false,
            });
          }}
          onCancel={() => {
            this.setState({
              showModal2: false,
            });
          }}
        >
          <p>芳芳老师喊你来学习react</p>
        </Modal>
      </div>
    );
  }

  handleOpen = (type)=>{
    this.setState({
      // 动态获取属性
      [type]:true
    })
  }

  handleConfirm = (type) =>{
    Modal[type]({
      title:'确认?',
      content:'学好react，走向人生巅峰',
      onOk() {
        console.log('ok')
      },
      onCancel() {
        console.log('Cancel')
      }
    })
  }
}
