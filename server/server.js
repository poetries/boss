const express = require('express');
const mongoose = require('mongoose');
const app = express();

// 连接mongo 并且使用React这个集合，没有就会新建
const DB_URL = 'mongodb://127.0.0.1:27017/react';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',()=>{
    console.log('mongo connect success');
})

// 类似于MySQL的表 mongo里有文档、字段的概念

const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))

//新增数据
// User.create({
//     user:'小胡',
//     age:18
// },(err,doc)=>{
//     if(!err) {
//         console.log(doc)
//     } else {
//         console.log(err)
//     }
// })

// 删除数据 {}过滤对象
// User.remove({age:22},(err,doc)=>{
//     console.log(doc)
// })
// 更新
User.update({'user':'小明'},{'$set':{age:30}},(err,doc)=>{
    console.log(doc)
})
app.get('/',(req,res)=>{
    res.send('<h1>Hello word!</h1>')
})
app.get('/data',(req,res)=>{
    // findOne 只返回一条，返回对象直接使用，而不是返回数组
    User.findOne({'user':'小明'},(err,doc)=>{
        res.json(doc)
    })
})



app.listen(9000,()=>{
    console.log('Node app listen 9000')
})  