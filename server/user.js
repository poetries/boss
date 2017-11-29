const express = require('express');
const Router = express.Router();
const model  = require('./model')
const User = model.getModel('user')

Router.get('/list',(req,res)=>{
    User.find({},(err,doc)=>{
        return res.json(doc)
    })
})
Router.post('/register', (req, res) =>{
    console.log(res.body)
	const {user, pwd, type} = req.body
	User.findOne({user},(err,doc)=>{
		if (doc) {
			return res.json({code:1,msg:'用户名重复'})
		}
		User.create({user,pwd,type},(e,d)=>{
            if (e) {
                return res.json({code:1,msg:'后端出错了'})
            }
            return res.json({code:0})
        })
		
	})
})
Router.get('/info',(req,res)=>{
    // 用户没有cookie
    return res.json({code:0})
})





module.exports = Router