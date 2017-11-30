import React from 'react'
import {connect} from 'react-redux'
import { NavBar } from 'antd-mobile';
import Boss from '../../components/Boss'
import Genius from '../../components/Genius'
import User from '../../components/User'
import Msg from '../../components/Msg'
import NavLink from '../../components/NavLink'
import {Switch,Route} from 'react-router-dom'


@connect(
	state=>state
)
class DashBoard extends React.Component{
	
	render(){
		const user = this.props.user
		const {pathname} = this.props.location
		const navList = [
			{
				path:`${this.props.match.path}/boss`,
				text:'牛人',
				icon:'boss',
				title:'牛人列表',
				component:Boss,
				hide:user.type=='genius'
			},
			{
				path:`${this.props.match.path}/genius`,
				text:'boss',
				icon:'job',
				title:'BOSS列表',
				component:Genius,
				hide:user.type=='boss'
			},
			{
				path:`${this.props.match.path}/msg`,
				text:'消息',
				icon:'msg',
				title:'消息列表',
				component:Msg
			},
			{
				path:`${this.props.match.path}/me`,
				text:'我',
				icon:'user',
				title:'个人中心',
				component:User
			}
		]
		const path = navList.find(v=>v.path===pathname)
		return (
			<div>
				<NavBar className='fixd-header' mode='dard'>{path&&path.title}</NavBar>
				<div style={{marginTop:45}}>
						<Switch>
							{navList.map(v=>(
								<Route  key={v.path} path={v.path} component={v.component}></Route>
							))}
						</Switch>
				</div>
				<NavLink data={navList}></NavLink>
			</div>
		)
	}
}

export default DashBoard
