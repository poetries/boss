import React from 'react';
import {Route,BrowserRouter as Router, Switch,Redirect} from 'react-router-dom'; //v4
import App from '../App';
import indexPage from '../containers/indexPage';
import NotFindPage from '../containers/NotFindPage';
import DashBoard from '../containers/DashBoard';
import Auth from '../containers/Auth';

const routeMap = (
    <Router>
        <App>
            <Switch>
                <Route exact path='/' component={indexPage} />
                <Route  path='/dashboard' component={DashBoard} />
                <Route  path='/login' component={Auth} />
                <Redirect to='/' />
            </Switch>
        </App>
    </Router>
)

export default routeMap;
