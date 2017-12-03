const express = require('express');
const userRouter = require('./user');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const model  = require('./model')
const Chat = model.getModel('chat')
const app = express()

// express和socket关联
const server = require('http').Server(app)
const io = require('socket.io')(server)

// io是全局的请求，socket是当前这次连接的请求
io.on('connection',(socket)=>{
    console.log('user login')
    //监听客户端的sendmsg事件，处理传递过来的参数
    socket.on('sendmsg',(data)=>{
        console.log(data)
        // 把data广播到全局
        // io.emit('recvmsg',data)

        const {from, to, msg} = data
		const chatid = [from,to].sort().join('_')
		Chat.create({chatid,from,to,content:msg},function(err,doc){
			io.emit('recvmsg', Object.assign({},doc._doc))
		})
		// console.log(data)
		// io.emit('recvmsg',data)
    })
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/user',userRouter)


// app.listen(9000,()=>{
//     console.log('Node app listen 9000')
// })  
server.listen(9000,()=>{
    console.log('Node app listen 9000')
}) 