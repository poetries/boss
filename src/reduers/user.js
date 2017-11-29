import * as ActionTypes from '../constants';

const initState = {
    isAuth:false,
    pwd:'',
    user:'',
    type:'',
    msg:''
}
export const user = (state=initState,action)=>{
    switch (action.type) {
        case ActionTypes.REGISTER_SUCCESS:
            return {...state,isAuth:true,...action.payload}
        case ActionTypes.ERROR_MSG:
            return {...state,isAuth:false,msg:action.msg}
        default:
            return state;
    }
}
