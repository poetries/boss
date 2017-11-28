import React, { Component } from 'react';
import './App.css';
import {Redirect} from 'react-router-dom';

class App extends Component {
  state = {
    isLogin:true
  }
  render() {
    return (
      <div className="App">
          {this.state.isLogin?this.props.children:<Redirect to='/login' />}
      </div>
    );
  }
}

export default App;
