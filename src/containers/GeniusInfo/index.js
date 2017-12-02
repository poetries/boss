import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { NavBar,InputItem,TextareaItem,WhiteSpace,Button } from 'antd-mobile';
import AvatarSelector from '@/components/AvatarSelector'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'; 
import {update} from '@/actions'

@connect(
  state=>state.user,
  {
    update
  }
)
export default class GeniusInfo extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    title:'',
    desc:'',
    money:''
  }
  handleChange(key,val){
    this.setState({
      [key]:val
    })
  }
  render() {
    const redirectTo = this.props.redirectTo
    const pathname = this.props.location.pathname
    return (
      <div>
          {redirectTo&&redirectTo!==pathname?<Redirect to={redirectTo} />:null}
          <NavBar mode="dark" >牛人信息完善</NavBar>
          <WhiteSpace />
          <AvatarSelector 
            selectAvatar={(imgname)=>{this.setState({avatar:imgname})}}
          />
           <WhiteSpace />
          <InputItem
            onChange={v=>this.handleChange('title',v)}
          >求职岗位</InputItem>
          <WhiteSpace />
          <WhiteSpace />
          <InputItem
            onChange={v=>this.handleChange('money',v)}
          >期望薪资</InputItem>
          <WhiteSpace />
          <TextareaItem
            title="个人简介"
            rows={3}
            onChange={v=>this.handleChange('desc',v)}
            autoHeight
          />
          <WhiteSpace />
          <Button type='primary'
            onClick={()=>this.props.update(this.state)}
          >保存</Button>
      </div>
    )
  }
}