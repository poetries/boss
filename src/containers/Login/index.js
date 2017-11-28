import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Logo from '../../components/Logo';
import { List, InputItem, WingBlank, WhiteSpace,Button } from 'antd-mobile';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.register = this.register.bind(this);
  }
  register(){
      this.props.history.push('/register');
  }
  render() {
    return (
      <div>
        <Logo />
        <h2>登录页面</h2>
        <WingBlank>
            <List>
                <InputItem>用户</InputItem>
                <WhiteSpace />
                <InputItem>密码</InputItem>
            </List>
            <Button type='primary'>登录</Button>
            <WhiteSpace />
            <Button onClick={this.register} type='primary'>注册</Button>
        </WingBlank>
      </div>
    )
  }
}