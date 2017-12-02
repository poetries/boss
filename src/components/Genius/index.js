import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getUserList} from '@/actions'
import UserCard from '../UserCard'

@connect(
	state=>state.chatuser,
	{getUserList}
)
class Genius extends React.Component{
	state = {
        data:[]
    }
	render(){
		return <UserCard userlist={this.state.data}></UserCard>
	}
	componentDidMount() {
		this.props.getUserList('boss')

		axios.get('/user/list?type=boss').then(res=>{
            if(res.data.code==0){
                this.setState({
                    data:res.data.data
                })
            }
        })
	}
}
export default Genius