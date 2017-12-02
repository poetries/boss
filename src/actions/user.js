import * as ActionTypes from '@/constants';
import axios from 'axios';

export const errorMsg = (msg)=>{
    return { msg, type:ActionTypes.ERROR_MSG }
}

const authSuccess = (obj) =>{
    const {pwd,...data} = obj
    return {type:ActionTypes.AUTH_SUCCESS,payload:data}
}
export const register =  ({user,pwd,repeatpwd,type}) => async (dispatch,getState)=>{

    if (!user || !pwd || !type) {
        return dispatch(errorMsg("用户名密码必须输入"));
    }
    if (pwd!==repeatpwd) {
        return dispatch(errorMsg("密码不一致"));
    }
    
    try {
        const res = await axios.post('/user/register',{user,pwd,type})
        if (res.status==200 && res.data.code ===0) {
            dispatch(authSuccess({user,pwd,type}))
        } else {
            dispatch(errorMsg(res.data.msg));
        }
    } catch (e) {
        console.log(e);
    }
}


export const  login = ({user,pwd}) => async (dispatch,getState)=>{
    if(!user || !pwd) {
        return dispatch(errorMsg("用户名密码必须输入"));
    }
    try {
        const res = await axios.post('/user/login',{user,pwd})
        if (res.status==200 && res.data.code ===0) {
            dispatch(authSuccess(res.data.data))
        } else {
            dispatch(errorMsg(res.data.msg));
        }
    } catch (e) {
        console.log(e);
    }
}

const loadDataSuccess = (data) =>{
    return {type:ActionTypes.LOADDATA_SUCCESS,payload:data}
}
export const loadData = ()=>async (dispatch,getState) =>{
    try{
        const res = await axios.get('/user/info')
        if (res.status === 200 && res.data.code ==0) {
            dispatch(loadDataSuccess(res.data.data))
        } else {
            dispatch(errorMsg(res.data.msg));
        }
    } catch(ex) {
        console.log(ex)
    }
}


export const update = (data)=>async (dispatch,getState) =>{
    try{
        const res = await axios.post('/user/update',data)
        if (res.status === 200 && res.data.code ==0) {
            dispatch(authSuccess(res.data.data))
        } else {
            dispatch(errorMsg(res.data.msg));
        }
    } catch(ex) {
        console.log(ex)
    }
}

export const logoutSubmit = ()=>{
	return { type:ActionTypes.LOGOUT }
}