import React, { memo, useState } from 'react';
import { Card, Button, Radio } from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import './index.less';

export default memo(function JButton() {
  // hooks
  const [Loading, setLoading] = useState(true);
  const [size, setSize] = useState('default');

  return (
    <div className="jd_btn">
      <Card title="基础按钮" className="card-wrap">
        <Button type="primary">金渡</Button>
        <Button>金渡</Button>
        <Button type="dashed">金渡</Button>
        <Button type="danger">金渡</Button>
        <Button disabled>金渡</Button>
      </Card>

      <Card title="图形按钮" className="card-wrap">
        <Button icon={<PlusOutlined />}>创建</Button>
        <Button icon={<EditOutlined />}>编辑</Button>
        <Button icon={<DeleteOutlined />}>删除</Button>
        <Button icon={<SearchOutlined />} shape="circle"></Button>
      </Card>

      <Card title="Loading按钮" className="card-wrap">
        <Button type="primary" loading={Loading}>
          确定
        </Button>
        <Button type="primary" loading={Loading} shape="circle"></Button>
        <Button loading={Loading}>点击加载</Button>
        <Button shape="circle" loading={Loading}></Button>
        <Button
          type="primary"
          onClick={(e) => {
            closeLoading();
          }}
        >
          关闭
        </Button>
      </Card>

      <Card title="按钮组">
        <Button.Group>
          <Button
            type="primary"
            icon={<LeftOutlined />}
            style={{ marginRight: '20px' }}
          >
            返回
          </Button>
          <Button type="primary" icon={<RightOutlined />}>
            前进
          </Button>
        </Button.Group>
      </Card>

      <Card title="按钮尺寸">
        <Radio.Group
          value={size}
          onChange={(e) => {
            changeSize(e);
          }}
        >
          <Radio value="small">小</Radio>
          <Radio value="default">中</Radio>
          <Radio value="large">大</Radio>
        </Radio.Group>

        <Button type="primary" size={size}>
          金渡
        </Button>
        <Button size={size}>金渡</Button>
        <Button type="dashed" size={size}>
          金渡
        </Button>
        <Button type="danger" size={size}>
          金渡
        </Button>
      </Card>
    </div>
  );

  function closeLoading() {
    setLoading(false);
  }

  function changeSize(e) {
    setSize(e.target.value);
  }
});
