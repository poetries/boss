import React from 'react';
import {Route,BrowserRouter as Router, Switch,Redirect} from 'react-router-dom'; //v4
import App from '../App';
import indexPage from '../containers/indexPage';
import NotFindPage from '../containers/NotFindPage';
import Login from '../containers/Login';
import Register from '../containers/Register';
import AuthRoute from '../components/AuthRoute';


const routeMap = (
    <Router>
        <App>
            <AuthRoute /> {/*检测路由是否ok*/}
            <Switch>
                <Route exact path='/' component={indexPage} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
            </Switch>
        </App>
    </Router>
)

export default routeMap;
