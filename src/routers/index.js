import React from 'react';
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom'; //v4
import App from '../App';
import indexPage from '../containers/indexPage';
import NotFindPage from '../containers/NotFindPage';

const routeMap = (
    <Router>
        <App>
            <Switch>
                <Route exact path='/' component={indexPage} />
                <Route  component={NotFindPage} />
            </Switch>
        </App>
    </Router>
)

export default routeMap;
