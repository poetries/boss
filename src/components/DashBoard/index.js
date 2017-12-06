import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Switch, Route,Redirect} from 'react-router-dom'
import {NavBar} from 'antd-mobile'
import Boss from '@/components/Boss'
import Genius from '@/components/Genius'
import Msg from '@/components/Msg'
import UserCenter from '@/components/UserCenter'
import NavFooter from '@/components/NavFooter'
import {connect} from 'react-redux'
import {getMsgList,sendMsg,recvMsg} from '@/actions'
import QueueAnim from 'rc-queue-anim';

@connect(
    state=>state,
    {
        getMsgList,
        recvMsg
    }
)
export default class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        // todo 有一个bug 当User没有及时加载取到值的时候，牛人列表、boss列表都显示出来
        const user = this.props.user?this.props.user:'boss'
        const {pathname} = this.props.location
    
        const navList = [
            {
                path:'/boss',
                text:'牛人',
                icon:'boss',
                title:'牛人列表',
                component:Boss,
                exact:false,
                hide:user.type==='genius',
            },
            {
                path:'/genius',
                text:'Boss',
                icon:'job',
                title:'BOSS列表',
                component:Genius,
                exact:false,
                hide:user.type==='boss'
            },
            {
                path:'/msg',
                text:'消息',
                icon:'msg',
                title:'消息列表',
                exact:false,
                component:Msg
            },
            {
                path:'/usercenter',
                text:'我',
                icon:'boss',
                title:'个人中心',
                exact:false,
                component:UserCenter
            }
        ]

        const page = navList.find(v=>v.path===pathname)

        return (
            <div>
                <NavBar className='fixd-header' mode='dard'>{page&&page.title}</NavBar>
                <div style={{marginTop:45}}>
                {/*让动画生效只渲染一个Route，根据当前的path决定组件*/}
                    {pathname==='/'||pathname==='/dashboard'?<Redirect to='/genius' />:''}
                    <QueueAnim type='scaleX'> 
                        <Route 
                            key={page&&page.path} 
                            path={page&&page.path} 
                            component={page&&page.component}
                            exact={page&&page.exact} 
                        />     
                    </QueueAnim> 
                </div>
                <NavFooter data={navList} />
            </div>
        )
    }
    componentDidMount(){
        // 进到本页面获取用户列表信息，展示未读信息
        // 没有数据才去请求，避免来回切换重复添加
        if(!this.props.chat.chatmsg.length) {
            this.props.getMsgList() // 初始化的时候获取所有的用户消息列表
            this.props.recvMsg() // 开始接受消息
        }
    }
}
