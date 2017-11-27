import {createStore,applyMiddleware,compose} from 'redux';
import {createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import rootReducer from '../reduers/';

const middleware = routerMiddleware(BrowserRouter)


const composedCreateStore = compose(
    applyMiddleware(thunk,middleware,createLogger()),
)(createStore);

const configureStore = (initialState={}) => composedCreateStore(rootReducer,initialState);

export default configureStore;
