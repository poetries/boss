import {combineReducers} from 'redux';
import {user} from './user';
import {chatuser} from './chatuser';
import {chat} from './chat';

const reducers = {
  user,
  chatuser,
  chat
}

export default combineReducers({
    ...reducers
})
