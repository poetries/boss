import React from 'react';
import {Route,BrowserRouter as Router, Switch,Redirect} from 'react-router-dom'; //v4
import Login from '@/containers/Login';
import Register from '@/containers/Register';
import BossInfo from '@/containers/BossInfo';
import GeniusInfo from '@/containers/GeniusInfo';

const routes = [
    {
      path:'/login',
      component:Login,
      exact:true
    },
    {
      path:'/register',
      component:Register,
      exact:true
    },
    {
      path:'/bossinfo',
      component:BossInfo,
      exact:true
    },
    {
      path:'/geniusinfo',
      component:GeniusInfo,
      exact:true
    }
]

const routeMap = (
    <Router>
        <Switch>
            {routes.map((v,index)=>(
                <Route 
                    key={index} 
                    path={v.path} 
                    component={v.component} 
                    exact={v.exact} 
                />
                ))
            }

            {/* <Redirect to='/login' /> */}
        </Switch>
    </Router>
)

export default routeMap;
