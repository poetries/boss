import React, { Component } from 'react'
import {List,InputItem,NavBar,Icon, Grid} from 'antd-mobile'
import {connect} from 'react-redux'
import {getMsgList,sendMsg,recvMsg} from '@/actions'
// import io from 'socket.io-client'
// const socket = io('ws://localhost:9000')
import {getChatId} from '@/utils/getChatId'
import QueueAnim from 'rc-queue-anim';

@connect(
    state=>state,
    {
        getMsgList,
        sendMsg,
        recvMsg
    }
)
export default class Chat extends Component {
    state = {
        text:'',
        msg:[]
    }
    handleSubmit(val){
        // console.log(val)
        // socket.emit('sendmsg',{text:val})
        // this.setState({text:''})

        // ================= 连接redux

        // 发送信息方 获取User下的_id
        const from = this.props.user._id
        // to 发送给谁 接受信息方
        const to = this.props.match.params.user
        // 发送的用户的信息
        // const msg = this.props.msg
        const msg = this.state.text // 用户输入的信息
        // 把数据传给sendMsg 向服务器发送消息
        this.props.sendMsg({from,to,msg})
        this.setState({
            text:'',
            showEmoji:false
        })
    }
    fixCarousel(){
		setTimeout(function(){
			window.dispatchEvent(new Event('resize'))
		},0)
	}
    render() {
        const emoji = '😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 😭 😓 😪 😴 🙄 🤔 😬 🤐 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 👍 👎 👊 ✊ 🤘 👌 👈 👉 👆 👇 ✋  🖐 🖖 👋  💪 🖕 ✍️  💅 🖖 💄 💋 👄 👅 👂 👃 👁 👀 '
            .split(' ')
            .filter(v=>v)
            .map(v=>({text:v}))
        
        // 当前聊天的目标
        const userid = this.props.match.params.user
        const users = this.props.chat.users
        const Item = List.Item

        // 获取不到用户的信息，当前组件不用渲染
        if(!users[userid]) {
            return null
        }
        // 当前聊天的id
        const chatid = getChatId(userid,this.props.user._id)// 传入当前用户信息的id,redux存储的当前登录的id
        const chatmsgs = this.props.chat.chatmsg.filter(v=>v.chatid === chatid)
        return (
           <div id='chat-page'>
               <NavBar
					mode='dark'
					icon={<Icon type="left" />}
					onLeftClick={()=>{
						this.props.history.goBack()
                    }}
                    style={{position: 'fixed',width: '100%',top: 0}}
				>
                    {/*通过userid查到User用户名*/}
					{users[userid].name}
				</NavBar>

              <QueueAnim delay={300}>     
                {chatmsgs.map(v=>{
                    const avatar = require(`../UserCard/img/${users[v.from].avatar}.png`)
                    {/*把用户聊天信息分成两部分*/}
                    return v.from ==userid?(
                        // 对方发来的
                        <List key={v._id}>
                            <Item
                                thumb={avatar} 
                            >{v.content}</Item>
                        </List>
                    ):(
                        // 显示我发的
                        <List key={v._id}>
                            <Item 
                                extra={<img src={avatar} />}
                                className='chat-me'
                            >{v.content}</Item>
                        </List>
                    )
                })}
                </QueueAnim>
                <div className='stick-footer'>
                    <List>
                        <InputItem
                            placeholder='请输入'
                            value={this.state.text}
                            onChange={v=>{
                                this.setState({text:v})
                            }}
                            extra={
                                    <div>
                                         <span
                                              style={{marginRight:15}}
                                              onClick={()=>{
                                                    this.setState({
                                                        showEmoji:!this.state.showEmoji
                                                    })
                                                    this.fixCarousel()
                                               }}
                                         >😔</span>
                                         <span onClick={this.handleSubmit.bind(this,this.state.text)}>
                                         发送
                                         </span>
                                    </div>
                                }
                        ></InputItem>
                    </List>
                    {this.state.showEmoji?<Grid 
						data={emoji}
						columnNum={9}
						carouselMaxRow={4}
						isCarousel={true}
						onClick={el=>{
							this.setState({
								text:this.state.text+el.text
							})
							
						}}
					/>:null}
                 </div>
           </div>
        )
    }
    componentDidMount(){
        // socket.on('recvmsg',(data)=>{
        //     this.setState({
        //         // 合并之前的msg和输入的text，在前端展示这个列表
        //         msg:[...this.state.msg,data.text]
        //     })
        // })
        if(!this.props.chat.chatmsg.length) {
            this.props.getMsgList() // 初始化的时候获取所有的用户消息列表
            this.props.recvMsg() // 开始接受消息
        }
    }   
}
