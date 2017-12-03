import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Card, WhiteSpace,WingBlank} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

@withRouter
export default class UserCard extends Component {
    constructor(props){
        super(props)
    }
    static propTypes = {
		userlist: PropTypes.array.isRequired
    }
    handleClick(v){
    //    this.props.history.push(`/chat/${v.user}`)
    // _id user在mongodb中的唯一标识
       this.props.history.push(`/chat/${v._id}`)
    }
    render() {
        
        const Header = Card.Header
        const Body = Card.Body
        return (
                <WingBlank>
                    <WhiteSpace />    
                    {
                       this.props.userlist?this.props.userlist.map(v=>(
                            v.avatar?(
                                <Card 
                                    key={v._id} 
                                    onClick={()=>this.handleClick(v)}
                                    style={{zIndex:'100'}}
                                >
                                    <Header
                                       title={v.user}
                                       thumb={require(`./img/${v.avatar}.png`)}
                                       extra={<span>{v.title}</span>}
                                    >
                                    </Header>
                                    <Body>
                                        {v.type==='boss'?<div>公司:{v.company}</div>:null}
                                        {v.desc.split('\n').map(d=>(
                                            <div key={d}>{d}</div>
                                        ))}
                                       
                                    </Body>
                                    <Card.Footer extra= {v.type==='boss'?<div>薪资:<span style={{color:"#f03"}}>{v.money}</span></div> :null}   />
                                </Card>
                            ):null
                        )):'加载中...'
                    }
                </WingBlank>
        )
    }
}
