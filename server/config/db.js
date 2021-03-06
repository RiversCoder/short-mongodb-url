const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// 创建 mongodb 连接方法
const connectDB = async () => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('mongodb connected.')
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;

