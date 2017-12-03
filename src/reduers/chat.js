import * as ActionTypes from '../constants';
const initState = {
    chatmsg:[],// 把后端传过来的数据放到这里
    users:{},
    unread:0
}

export const chat = (state=initState,action)=>{
    switch(action.type) {
        case ActionTypes.MSG_LIST:
        // 把read是false取出来传给unread：action.payload.filter(v=>!v.read).length
            // 这个是对的
            // return {...state,users:action.payload.users,chatmsg:action.payload.msgs,unread:action.payload.msgs.filter(v=>!v.read&&v.to===action.payload.userid).length}
            // 这个有问题 需要拿到userid才能判断 todo
            return {...state,users:action.payload.users,chatmsg:action.payload.msgs,unread:action.payload.msgs.filter(v=>!v.read).length}
        // case ActionTypes.MSG_READ:
        case ActionTypes.MSG_RECV:
            // 每次客户端发送消息到服务器，服务端返回消息 unread都需要加1
            // return {...state,chatmsg:[...state.chatmsg,action.payload],unread:state.unread+1}

            // 这是对的 未读消息列表只统计别人发给我的，不统计我发出去的。上面的不能简单加1
            const n = action.payload.to === action.userid?1:0
            return {...state,chatmsg:[...state.chatmsg,action.payload],unread:state.unread+n}
        default:
            return state;
    }
}