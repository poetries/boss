import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { NavBar,InputItem,TextareaItem,WhiteSpace,Button } from 'antd-mobile';
import AvatarSelector from '../../components/AvatarSelector'
import {connect} from 'react-redux'
import {update} from '../../actions';
import {Redirect} from 'react-router-dom'; 


@connect(
  state=>state.user,
  {
    update
  }
)
export default class BossInfo extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    title:'',
    desc:'',
    company:'',
    money:'',
    avatar:''
  }
  handleChange(key,val){
    this.setState({
      [key]:val
    })
  }
  render() {
    const path = this.props.location.pathname // /bossinfo
    const redirect = this.props.redirectTo // /boss
    return (
      <div>
          {redirect&&redirect!==path?<Redirect to={`dashboard${redirect}`} />:null}
          <NavBar mode="dark" >BOSS信息完善</NavBar>
          <WhiteSpace />
          <AvatarSelector 
            selectAvatar={iconName=>this.setState({avatar:iconName})}
          />
          <WhiteSpace />
          <InputItem
            onChange={v=>this.handleChange('title',v)}
          >招聘职位</InputItem>
          <InputItem
            onChange={v=>this.handleChange('company',v)}
          >公司名称</InputItem>
          <InputItem
            onChange={v=>this.handleChange('money',v)}
          >职位薪资</InputItem>
          <TextareaItem
            title="职位描述"
            placeholder="职位信息"
            rows={3}
            onChange={v=>this.handleChange('desc',v)}
            autoHeight
          />
          <WhiteSpace />
          <Button type='primary' onClick={()=>{
            this.props.update(this.state)
          }}>保存</Button>
      </div>
    )
  }
}