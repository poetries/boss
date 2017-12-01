import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import {Switch, Route} from 'react-router-dom'
import NavFooter from '../NavFooter'
import Boss from '../Boss'
import Genius from '../Genius'
import Msg from '../Msg'
import User from '../User'
import { Redirect } from 'react-router-dom'


@connect(
  state=>state
)
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const {pathname} = this.props.location
		const user = this.props.user
		const path = this.props.match.path
    const navList = [
			{
				path:`${path}/boss`,
				text:'牛人',
				icon:'boss',
				title:'牛人列表',
				component:Boss,
				hide:user.type=='genius'
			},
			{
				path:`${path}/genius`,
				text:'Boss',
				icon:'job',
				title:'BOSS列表',
				component:Genius,
				hide:user.type=='boss'
			},
			{
				path:`${path}/msg`,
				text:'消息',
				icon:'msg',
				title:'消息列表',
				component:Msg
			},
			{
				path:`${path}/me`,
				text:'我',
				icon:'user',
				title:'个人中心',
				component:User
			}
    ]
    // 这个页面重新写
    const url = navList.find(v=>v.path===pathname)
    return (
      <div>
				<NavBar className='fixd-header' mode='dard'>{url&&url.title}</NavBar>
			
				<div style={{marginTop:45}}>
						<Switch>
							{/* {navList.map(v=>(
								<Route key={v.path} path={v.path} component={v.component}></Route>
							))} */}

							<Route exact path={`${path}`} render={()=><Redirect to={`${path}/boss`}/>}/>
							<Route exact path={`${path}/boss`} component={Boss} />
							<Route path={`${path}/genius`} component={Genius} />
							<Route path={`${path}/msg`} component={Msg} />
							<Route path={`${path}/me`} component={User} />
						</Switch>
				</div>

				<NavFooter data={navList}></NavFooter>
				
			</div>
    )
  }
}
