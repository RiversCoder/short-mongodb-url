const mongoose = require('mongoose');

// 创建表结构
const urlSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortYrl: String,
    date: { type: String, default: Date.now() }
});

// 导出表模型
module.exports = mongoose.model('Url', urlSchema);