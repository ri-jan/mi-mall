import axios from 'axios'
export default function request(config){
	const instance = axios.create({
	  baseURL: 'http://124.70.157.179:3000/api',
	  timeout: 5000,
	})
	instance.interceptors.request.use(config=>{
		// console.log('请求拦截成功')
		return config
	},err=>{
		console.log(err)
	})
	instance.interceptors.response.use(res=>{
		// console.log('响应拦截成功')
		return res.data
	},err=>{
		console.log(err)
	})
	return instance(config)
}
