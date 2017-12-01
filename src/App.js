import React, { Component } from 'react';
import './App.css';
import {Route,BrowserRouter as Router, Switch,Redirect} from 'react-router-dom'; //v4
import NotFindPage from './containers/NotFindPage';
import Login from './containers/Login';
import Register from './containers/Register';
import BossInfo from './containers/BossInfo';
import GeniusInfo from './containers/GeniusInfo';
import AuthRoute from './components/AuthRoute';
import DashBoard from './components/DashBoard';
import RouterMap from './routers';


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
          <AuthRoute /> {/*授权路由，验证登录信息*/}
          <Switch>
              <Route  path='/login' component={Login} />
              <Route  path='/register' component={Register} />
              <Route  path='/bossinfo' component={BossInfo} />
              <Route  path='/geniusinfo' component={GeniusInfo} />
              <Route  path='/dashboard' component={DashBoard} />
              <Route path="/" render={()=><Redirect to="/dashboard"/>}/>
              {/* <Route  path='*' component={NotFindPage} /> */}
              {/* <Redirect to="/DashBoard" /> */}
          </Switch>
      </div>
    );
  }
}

export default App;
