//  引入 express , 拿到 express 方法的返回值 app
const express = require('express');
const app = express();
// 引入 config 模块
const config = require('config');

// 引入 body-parser 中间件，用处理json数据
const bodyParser = require('body-parser');

// 引入 mongodb 相关配置
const connectDB = require('./config/db');

// connect to database
connectDB();


// 设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});


// 配置 body-parser 中间件json解析，配置了这个才能使用 req.body ( bodyParser.urlencoded() )
// 解释与 express.json() 、express.urlencoded() 
app.use(bodyParser.json()); 
// app.use(express.json());

// 配置路由
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));


// 监听启动服务
const PORT = config.get('port');
app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));