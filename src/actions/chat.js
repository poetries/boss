import * as ActionTypes from '../constants';
import axios from 'axios'
import io from 'socket.io-client'
const socket = io('ws://localhost:9000')

const msgList = (msgs,users,userid)=>{
    console.log(userid)
    return {
        type:ActionTypes.MSG_LIST,
        payload:{msgs,users,userid}
    }
}

// 首次进来获取消息列表
export const getMsgList = ()=> async (dispatch,getState)=>{
    try{
        const res = await axios.get('/user/getmsglist')
        if (res.status === 200 && res.data.code === 0) {
            console.log("========== getState ======",getState())
            // 当前登录的用户的id
            const userid = getState().user._id
            dispatch(msgList(res.data.msgs,res.data.users,userid))
        }
    } catch(ex) {
        console.log(ex)
    }
}

export const sendMsg = ({from,to,msg})=>(dispatch,getState)=>{
    // 把数据发送给后端，事件名是sendmsg
    socket.emit('sendmsg',{from,to,msg})
}

const msgRecv = (msg,userid)=>{
    return {
        userid,
        type:ActionTypes.MSG_RECV,
        payload:msg
    }
}
// 进到应用监听revMsg，开始接受信息
// 当点击发送的时候，执行这个函数
export const recvMsg = ()=>(dispatch,getState)=>{
    // 接收信息
    socket.on('recvmsg',(data)=>{
        console.log('recvmsg',data)
        console.log("========== recvMsg --- getState ======",getState())
        // 当前登录的用户的id
        const userid = getState().user._id

        // 把从服务接收的数据dispatch到redux中保存
        dispatch(msgRecv(data,userid))
    })
}