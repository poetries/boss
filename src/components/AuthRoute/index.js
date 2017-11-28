import React from 'react'
import axios from 'axios';
import {withRouter} from 'react-router-dom';


// 负责获取用户信息，负责简单的跳转
@withRouter
class AuthRoute extends React.Component{

	render(){
		return (
			<div>
				
			</div>
		)
    }
    componentDidMount(){
        // 获取用户信息
        // 是否登录
        // 现在URL地址 Login是不需要跳转的
        // 用户的Type 身份是BOSS 还是牛人
        // 用户是否完善信息（选择头像、个人简介）
        const publicList = ['login','register'];
        const pathname = this.props.location.pathname;
        if (publicList.indexOf(pathname)>-1) {
            return null;
        }
        axios.get('/user/info').then(res=>{
            if (res.status === 200 && res.data.code ==1) {
               
            } else {
                this.props.history.push('/login')
            }
        })
    }
}

export default AuthRoute
