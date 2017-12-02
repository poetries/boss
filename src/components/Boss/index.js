import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUserList} from '@/actions'
import UserCard from '@/components/UserCard'
import axios from 'axios'

@connect(
    state=>state.chatuser,
    {
        getUserList
    }
)
export default class Boss extends Component {
    state = {
        data:[]
    }
    componentDidMount(){
        this.props.getUserList('genius')

        // 方法二，不用连接redux
        axios.get('/user/list?type=genius').then(res=>{
            if(res.data.code==0){
                this.setState({
                    data:res.data.data
                })
            }
        })

    }
    render() {
        return (
            <div>
                <UserCard userlist={this.state.data}></UserCard>
            </div>
        )
    }
    
}
