import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Logo from '../../components/Logo';
import { List, InputItem, WingBlank, WhiteSpace,Button,Radio } from 'antd-mobile';


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }
  state = {
      user:'',
      pwd:'',
      repeatpwd:'',
      type:'genius'
  }
  register(){
      this.props.history.push('/register');
  }
  handleChange(key,val){
      this.setState({
          [key]:val
      })
  }
  handleRegister(){
      console.log(this.state)
  }
  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div>
        <Logo />
        <List>
             <InputItem
                onChange={v=>this.handleChange('user',v)}
            >用户</InputItem>
             <WhiteSpace />
             <InputItem
                type='password'
                onChange={v=>this.handleChange('pwd',v)}
             >密码</InputItem>
             <WhiteSpace />
             <InputItem
                type='password'
                onChange={v=>this.handleChange('repeatpwd',v)}
             >确认密码</InputItem>
             <WhiteSpace />
             <RadioItem  checked={this.state.type === 'genius'}
                onChange={v=>this.handleChange('type','genius')}
             >牛人</RadioItem>
             <RadioItem  checked={this.state.type === 'boss'}
                onChange={v=>this.handleChange('type','boss')}
             >BOSS</RadioItem>
             <WhiteSpace />
             <Button type='primary' onClick={this.handleRegister}>注册</Button>
        </List>
      </div>
    )
  }
}