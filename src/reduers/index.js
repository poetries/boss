import {combineReducers} from 'redux';
import {user} from './user';
import {chatuser} from './chatUser';

const reducers = {
  user,
  chatuser
}

export default combineReducers({
    ...reducers
})
