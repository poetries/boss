const express = require('express');
const userRouter = require('./user');
const mongoose = require('mongoose');
const app = express();


app.use('/user',userRouter); // userRouter子路由


app.listen(9000,()=>{
    console.log('Node app listen 9000')
})  