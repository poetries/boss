import * as ActionTypes from '../constants';

// 必须初始化结构。否则redux init的时候出现undefined
const User = (state={},action) =>{
    switch (action.type) {
        case ActionTypes.REGISTER_SUCCESS:
            return  {...state,payload:action.payload}
        default:
            return state;
    }
}
export default User
