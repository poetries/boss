import * as ActionTypes from '../constants';
import axios from 'axios';

const userList = (data) =>{
	return { type:ActionTypes.USER_LIST, payload:data}
}

export const getUserList = (type)=>async (dispatch,getState) =>{
    try{
        const res = await axios.get('/user/list?type='+type)
        if (res.data.code==0) {
            dispatch(userList(res.data.data))
        }
    } catch(ex) {
        console.log(ex)
    }
}