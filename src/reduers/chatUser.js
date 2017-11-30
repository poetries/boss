import * as ActionTypes from '../constants';

const initState = {
	userlist:[]
}

export const chatuser = (state=initState, action) =>{
	switch(action.type){
		case ActionTypes.USER_LIST:
			return {...state, userlist:action.payload}
		default:
			return state
	}
}