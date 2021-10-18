const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

app.all('*', function(req, res, next) {
  //设为指定的域
  res.header('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Credentials', true);
  res.header("X-Powered-By", ' 3.2.1');
  next();
});

app.get('/user', (req, res) => {
  // id	姓名	年龄	性别	地址	联系方式
    res.send({
      user: [
        {id:1,key:1,name:'bob',age:19,isMale:true,address:'深圳宝安',phone:'13650780459'},
        {id:2,key:2,name:'bob',age:28,isMale:false,address:'深圳南山',phone:'13650780459'},
        {id:3,key:3,name:'bob',age:32,isMale:false,address:'深圳福田',phone:'13650780459'},
        {id:4,key:4,name:'bob',age:56,isMale:true,address:'深圳罗湖',phone:'13650780459'},
        {id:5,key:5,name:'bob',age:18,isMale:false,address:'深圳龙华',phone:'13650780459'},
        {id:6,key:6,name:'bob',age:22,isMale:true,address:'深圳龙岗',phone:'13650780459'}
      ]
    })
})

app.post('/login', (req, res) => {
  console.log(req.body);
  if(req.body.username == 'moxianqiang' && req.body.password == '13650780459') {
    res.send({status:200});
  } else {
    res.send({status:400});
  }
})

app.listen(3001, () => {
  console.log('serve is listening......');
})