const express = require('express');
const model  = require('./model')
const Router = express.Router();
const User = model.getModel('user')
const Chat = model.getModel('chat')
const utils = require('utility')
const _filter = {'pwd':0,'__v':0}

// 清除聊天信息
// Chat.remove({},(e,d)=>{

// })

Router.get('/list',(req,res)=>{
	// User.remove({},(e,d)=>{}) 清除用户信息
	const {type} = req.query
    User.find({type},(err,doc)=>{
        return res.json({code:0,data:doc})
    })
})
Router.get('/getmsglist',function(req,res){
	// 从cookie中获取所有的用户信息
	const user = req.cookies.userid

	User.find({},function(e,userdoc){
		let users = {}
		userdoc.forEach(v=>{
			users[v._id] = {name:v.user, avatar:v.avatar}
		})
		Chat.find({'$or':[{from:user},{to:user}]},function(err,doc){
			if (!err) {
				return res.json({code:0,msgs:doc, users:users})
			}
		})

	})
	// {'$or':[{from:user,to:user}]}

})
Router.post('/update',(req,res)=>{
	const userid = req.cookies.userid
	if(!userid) {
		return json.dumps({code:1}) //dict转成str
	}
	const body = req.body
	User.findByIdAndUpdate(userid,body,(err,doc)=>{
		const data = Object.assign({},{
			userid:doc.user,
			type:doc.type
		},body)
		return res.json({code:0,data})
	})
})
Router.post('/login', function(req,res){
	const {user, pwd} = req.body
	User.findOne({user,pwd:md5Pwd(pwd)},_filter,function(err,doc){
		if (!doc) {
			return res.json({code:1,msg:'用户名或者密码错误'})
		}
		res.cookie('userid', doc._id)
		return res.json({code:0,data:doc})
	})
})
Router.post('/register', function(req, res){
	const {user, pwd, type} = req.body
	User.findOne({user},function(err,doc){
		if (doc) {
			return res.json({code:1,msg:'用户名重复'})
		}
		
		const userModel = new User({user,type,pwd:md5Pwd(pwd)})
		userModel.save(function(e,d){
			if (e) {
				return res.json({code:1,msg:'后端出错了'})
			}
			const {user, type, _id} = d
			res.cookie('userid', _id)
			return res.json({code:0,data:{user, type, _id}})
		})
	})
})
Router.get('/info',function(req, res){
	const {userid} = req.cookies
	if (!userid) {
		return res.json({code:1})
	}
	User.findOne({_id:userid} ,_filter , function(err,doc){
		if (err) {
			return res.json({code:1, msg:'后端出错了'})
		}
		if (doc) {
			return res.json({code:0,data:doc})
		}
	})
	// 用户有没有cookie
	
})

const md5Pwd = (pwd) =>{
    const salt = 'imooc_is_good_3957x8yza6!@#IUHJh~~';
    console.log(utils.md5(utils.md5(pwd+salt)))
	return utils.md5(utils.md5(pwd+salt))
}


module.exports = Router