// 连接mongo 并且使用React这个集合，没有就会新建
const DB_URL = 'mongodb://127.0.0.1:27017/react';
mongoose.connect(DB_URL);

mongoose.connection.on('connected',()=>{
    console.log('mongo connect success');
})