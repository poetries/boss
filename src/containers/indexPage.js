import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class NotFindPage extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        <h1>首页</h1>
      </div>
    )
  }
}