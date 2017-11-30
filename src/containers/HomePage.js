import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import logo from '../logo.svg';

export default class NotFindPage extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
            
        </div>
      </div>
    )
  }
}