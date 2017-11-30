import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getUserList} from '../../actions'
import UserCard from '../UserCard'

@connect(
	state=>state.chatuser,
	{getUserList}
)

class Genius extends React.Component{
	componentDidMount() {
		this.props.getUserList('boss')
        console.log(this.props)
	}
	render(){
		return <UserCard userlist={this.props.userlist}></UserCard>
	}

}
export default Genius