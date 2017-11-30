import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../../actions'
import UserCard from '../UserCard'

@connect(
    state=>state.chatuser,
    {
        getUserList
    }
)
export default class Genius extends Component {
    render() {
        return (
            <div>
                <UserCard userlist={this.props.userlist}></UserCard>
            </div>
        )
    }
    componentDidMount(){
        this.props.getUserList('boss')
    }
}
