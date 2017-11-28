import * as ActionTypes from '../constants';
import axios from 'axios';

export const errorMsg = (msg)=>{
    return { msg, type:ActionTypes.ERROR_MSG }
}

const registerSuccess = (data) =>{
    return {type:ActionTypes.REGISTER_SUCCESS,payload:data}
}
export const register =  ({user,pwd,repeatpwd,type}) => async (dispatch,getState)=>{
    if (!user || !pwd || !type) return errorMsg("用户名密码必须输入");
    if (pwd!==repeatpwd) return errorMsg("密码不一致");

    try {
        const res = await axios.get('/user/register',{user,pwd,type})
        if (res.status==200 && res.data.code ===0) {
            dispatch(registerSuccess(res.data.data))
        } else {
            dispatch(errorMsg(res.data.msg));
        }
    } catch (e) {
        console.log(e);
    }
}