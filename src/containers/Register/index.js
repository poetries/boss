import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'; 
import Logo from '../../components/Logo';
import { List, InputItem, WingBlank, WhiteSpace,Button,Radio } from 'antd-mobile';
import {connect} from 'react-redux';
import {register} from '../../actions'

@connect(
    state=>state.user,
    {
        register
    }
)
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
  }
  state = {
      user:'',
      pwd:'',
      repeatpwd:'',
      type:'genius'
  }

  handleChange(key,val){
      this.setState({   
          [key]:val
      })
  }
  handleRegister(){
      this.props.register(this.state)
  }
  render() {
    const RadioItem = Radio.RadioItem;
    
    return (
      <div>
          {this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
        <Logo />
        <List>
            {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
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