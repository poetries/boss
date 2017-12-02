import axios from 'axios'
import { Toast } from 'antd-mobile'

// 拦截请求,所有的请求发出去之前都会经过这里
axios.interceptors.request.use(function(config){
	Toast.loading('加载中',0)
	return config
})

// 拦截响应
axios.interceptors.response.use(function(config){
	Toast.hide()
	return config
})