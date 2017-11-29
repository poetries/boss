const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cookieParser())

const userRouter = require('./user');
app.use('/user',userRouter)


app.listen(9000,()=>{
    console.log('Node app listen 9000')
})  