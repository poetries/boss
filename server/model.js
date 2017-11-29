// 连接mongo 并且使用React这个集合，没有就会新建
const mongoose = require('mongoose');
const DB_URL = 'mongodb://127.0.0.1:27017/react-chat';
mongoose.connect(DB_URL,{useMongoClient:true});

mongoose.connection.on('connected',()=>{
    console.log('mongo connect success');
})

const models = {
	user:{
		'user':{type:String, 'require':true},
		'pwd':{type:String, 'require':true},
		'type':{'type':String, 'require':true},
		//头像
		'avatar':{'type':String},
		// 个人简介或者职位简介
		'desc':{'type':String},
		// 职位名
		'title':{'type':String},
		// 如果你是boss 还有两个字段
		'company':{'type':String},
		'money':{'type':String}
	},
	chat:{
	}
}

for(let m in models){
	mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
	getModel:function(name){
		return mongoose.model(name)
	}
}
