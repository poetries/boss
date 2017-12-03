import React from 'react';
import {Route,BrowserRouter as Router, Switch,Redirect} from 'react-router-dom'; //v4
import Login from '@/containers/Login';
import Register from '@/containers/Register';
import BossInfo from '@/containers/BossInfo';
import GeniusInfo from '@/containers/GeniusInfo';
import DashBoard from '@/components/DashBoard';
import AuthRoute from '@/components/AuthRoute';
import Chat from '@/components/Chat';
 
const routeRules = [
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
    },
    {
      path:'/chat/:user',
      component:Chat,
      exact:true
    },
    {
      path:'',// 只要switch下没有匹配到就渲染默认路由
      component:DashBoard,
      exact:false
    }
]

const routeMap = (
    <Router>
        <div>
            <AuthRoute /> {/*授权路由，验证用户登录信息*/}
            <Switch>
                {routeRules.map((v,index)=>(
                    <Route 
                        key={index} 
                        path={v.path} 
                        component={v.component} 
                        exact={v.exact} 
                    />
                    ))
                }
            </Switch>
            
        </div>
    </Router>
)

export default routeMap;
