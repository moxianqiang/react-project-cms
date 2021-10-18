import React, { memo,useState } from 'react'
import { Table, Button, Modal, message } from 'antd'

export default memo(function Index() {
  const data = [
    {
      key:'1',
      name: '芳芳',
      age:16,
      addres:'好吃大街1号'
    },
    {
      key:'2',
      name: '亦菲',
      age:19,
      addres:'好吃大街2号'
    },
    {
      key:'3',
      name: '热巴',
      age:21,
      addres:'好吃大街3号'
    },
  ];

  const [state, setstate] = useState(data)

  const removeItem = (text,key) =>{
    Modal.confirm({
      title:'确认',
      content:'你确认要删除吗？',
      onOk:()=>{
        setstate(state.filter(item=> item.key !== key))
        message.success('删除成功');
      } 
    })
  }

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      fixed:'left',
      width:100,
      key:'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      fixed:'left',
      width:100,
      key:'age',
    },
    // {title:'columns1',dataIndex:'address',key:'1'},
    // {title:'columns2',dataIndex:'address',key:'2'},
    // {title:'columns3',dataIndex:'address',key:'3'},
    // {title:'columns4',dataIndex:'address',key:'4'},
    // {title:'columns5',dataIndex:'address',key:'5'},
    // {title:'columns6',dataIndex:'address',key:'6'},
    // {title:'columns7',dataIndex:'address',key:'7'},
    // {title:'columns8',dataIndex:'address',key:'8'},

    {
      titile:'操作',
      key:'operaion',
      fixed:'right',
      width:100,
      /* 
        text:键的值
        record:列的值
      */
      render:(text,record)=>{
        return <Button onClick={()=>{removeItem(text,record.key)}}>删除</Button>
      }
    }
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={state}
        scroll={{x:600}}
        bordered
      />
    </div>
  )
})
