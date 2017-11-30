import React, { Component } from 'react';
import './App.css';
import {Route,BrowserRouter as Router, Switch,Redirect} from 'react-router-dom'; //v4
import HomePage from './containers/HomePage';
import NotFindPage from './containers/NotFindPage';
import Login from './containers/Login';
import Register from './containers/Register';
import BossInfo from './containers/BossInfo';
import Boss from './components/Boss';
import Genius from './components/Genius';
import GeniusInfo from './containers/GeniusInfo';
import AuthRoute from './components/AuthRoute';
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
              <Route exact path='/' component={HomePage} />
              <Route  path='/login' component={Login} />
              <Route  path='/register' component={Register} />
              <Route  path='/bossinfo' component={BossInfo} />
              <Route  path='/geniusinfo' component={GeniusInfo} />
              <Route  path='/genius' component={Genius} />
              <Route  path='/boss' component={Boss} />
              <Route  path='*' component={NotFindPage} />
          </Switch>
      </div>
    );
  }
}

export default App;
