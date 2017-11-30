
import React from 'react'
import PropTypes from 'prop-types'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

@withRouter
class NavLinkBar extends React.Component{
	static propTypes = {
		data: PropTypes.array.isRequired
	}
	render(){
		const navList = this.props.data.filter(v=>!v.hide)
        const {pathname} = this.props.location
		return (
			<TabBar>
				{navList.map(v=>(
					<TabBar.Item
						key={v.path}
						title={v.text}
						icon={{uri: require(`../../../public/img/${v.icon}.png`)}}
						selectedIcon={{uri: require(`../../../public/img/${v.icon}-active.png`)}}
						selected={pathname===v.path}
						onPress={()=>{
							this.props.history.push(v.path)
						}}
					>
					
					</TabBar.Item>
				))}
			</TabBar>
		)
	}
}

export default NavLinkBar