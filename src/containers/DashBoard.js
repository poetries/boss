import React, { Component } from 'react';
import {Link,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {Login,Logout} from '../actions';



class DashBoard extends Component {
    render() {
        console.log(this.props)
        const redirectToLogin = <Redirect to='/login'></Redirect>
        
        return this.props.auth.isAuth?redirectToLogin:redirectToLogin
    }
}

const mapStateToProps = (state)=>{
    return {
        auth: state.Auth
    }
}
export default connect(
    mapStateToProps, {
        Login,
        Logout
    }
)(DashBoard)