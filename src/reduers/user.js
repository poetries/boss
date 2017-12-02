import * as ActionTypes from '../constants';
import {getDirectPath} from '../utils/getDirectPath';

const initState = {
    redirectTo:'',
    user:'',
    type:'',
    msg:''
}
export const user = (state=initState,action)=>{
    switch (action.type) {
        case ActionTypes.AUTH_SUCCESS:
            return {...state,redirectTo:getDirectPath(action.payload),...action.payload}
        case ActionTypes.LOADDATA_SUCCESS:
            return {...state,...action.payload}
        case ActionTypes.ERROR_MSG:
            return {...state,msg:action.msg}
        case ActionTypes.LOGOUT:
            return {...initState,redirectTo:'/login'}    
        default:
            return state;
    }
}

