import * as ActionTypes from '../constants';

// 必须初始化结构。否则redux init的时候出现undefined
const initialState = {
    users: [],
    usersById:[]
}

const User = (state=initialState,action) =>{
    switch (action.type) {
        case ActionTypes.SET_USER:
            return  {
                ...state,
                users:'test'
            }
        default:
            return state;
    }
}
export default User
