import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import {Switch, Route} from 'react-router-dom'
import NavFooter from '../NavFooter'
import Boss from '../Boss'
import Genius from '../Genius'

function Msg(){
	return <h2>消息列表页面</h2>
}
function User(){
	return <h2>个人中心页面</h2>
}
@connect(
  state=>state.user,
  {}
)
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const {pathname} = this.props.location
		const user = this.props.user
    const navList = [
			{
				path:'/boss',
				text:'牛人',
				icon:'boss',
				title:'牛人列表',
				component:Boss,
				hide:user.type=='genius'
			},
			{
				path:'/genius',
				text:'boss',
				icon:'job',
				title:'BOSS列表',
				component:Genius,
				hide:user.type=='boss'
			},
			{
				path:'/msg',
				text:'消息',
				icon:'msg',
				title:'消息列表',
				component:Msg
			},
			{
				path:'/me',
				text:'我',
				icon:'user',
				title:'个人中心',
				component:User
			}
    ]
    // 这个页面重新写
    const path = navList.find(v=>v.path===pathname)
    return (
      <div>
				<NavBar className='fixd-header' mode='dard'>{path&&path.title}</NavBar>
				<div style={{marginTop:45}}>
						<Switch>
							{navList.map(v=>(
								<Route key={v.path} path={v.path} component={v.component}></Route>
							))}
						</Switch>
				</div>

				<NavFooter data={navList}></NavFooter>
				
			</div>
    )
  }
}
