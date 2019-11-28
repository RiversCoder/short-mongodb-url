const express = require('express');
const connectDB = require('./config/db');
const app = express();
const bodyParser = require('body-parser');

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

// Define Routes
app.use(bodyParser.json())
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

app.use(express.json({extend: false}));
const PORT = 3002;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));