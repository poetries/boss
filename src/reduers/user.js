import * as ActionTypes from '../constants';
import {getDirectPath} from '../utils/getDirectPath';

const initState = {
    redirectTo:'',
    isAuth:false,
    user:'',
    type:'',
    msg:''
}
export const user = (state=initState,action)=>{
    switch (action.type) {
        case ActionTypes.REGISTER_SUCCESS:
            return {...state,isAuth:true,redirectTo:getDirectPath(action.payload),...action.payload}
        case ActionTypes.LOGGIN_SUCCESS:
            return {...state,isAuth:true,redirectTo:getDirectPath(action.payload),...action.payload}
        case ActionTypes.LOADDATA_SUCCESS:
            return {...state,...action.payload}
        case ActionTypes.ERROR_MSG:
            return {...state,isAuth:false,msg:action.msg}
        default:
            return state;
    }
}

