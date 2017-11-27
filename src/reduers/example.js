import * as ActionTypes from '../constants';

// 必须初始化结构。否则redux init的时候出现undefined
const Auth = (state={
    isAuth:false,
    user:'poetries'
},action) =>{
    switch (action.type) {
        case ActionTypes.LOGIN:
            return  {...state,isAuth:true }
        case ActionTypes.LOGINOUT:
            return  {...state,isAuth:false }
        default:
            return state;
    }
}
export default Auth
