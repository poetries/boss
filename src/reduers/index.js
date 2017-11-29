import {combineReducers} from 'redux';
import {user} from './user';

const reducers = {
  user
}

export default combineReducers({
    ...reducers
})
