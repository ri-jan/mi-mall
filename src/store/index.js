import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import request from '@/network/request.js'

/*获取navbar数据*/
function getNavBarData() {
	return request({
		url: '/navbar',
		method: 'get'
	})
}
/*获取tabbar数据*/
function getTabBarData() {
	return request({
		url: '/tabbar',
		method: 'get'
	})
}


export default new Vuex.Store({
	state: {
		navBarList: ['小米手机', 'Redmi红米', '电视', '笔记本', '家电', '路由器', '智能硬件'],
		navBarInfoList: [],
		tabBarList: [],
		tabBarTitleList: ['手机 电话卡', '电视 盒子', '笔记本 显示器', '家电 插线板', '出行 穿戴', '智能 路由器', '电源 配件', '健康 儿童', '耳机 音箱', '生活 箱包'],
		cartList:[],
		totalPrice:0
	},
	mutations: {
		/*获取navbarinfo数据*/
		getNavBarInfoList(state, payload) {
			state.navBarInfoList = payload.filter((k) => k.length != 0)
		},
		/*获取tabbarinfo数据*/
		getTabBarList(state, payload) {
			state.tabBarList = payload.filter((k) => k.length != 0)
		},
		/*加入购物车*/
		joinCart(state,product){
			state.cartList.push(product)
		},
		/*每次点击加入购物车按钮该商品数量加1*/
		productCountAdd(state,product){
			product.count += 1
		},
		/*删除购物车中指定商品*/
		productRemove(state,index){
			state.cartList.splice(index,1)
		},
		/*计算总价格*/
		getTotalPrice(state){
			let result = 0
			let list = state.cartList.filter(i=>i.selected == true)
			for(let i of list){
				result += i.totalPrice * i.count
			}
			state.totalPrice = result
		},
		/*全选*/
		selectedAll(state){
			for(let i of state.cartList){
				i.selected =  !i.selected
			}
		}
	},
	actions: {
		/*获取navbarinfo数据*/
		getNavBarStoreData(context) {
			getNavBarData().then(res => {
				let arr = []
				for (let i = 0; i < res.length; i++) {
					let result = res.filter((j) => j.category == context.state.navBarList[i])
					arr.push(result)
				}
				context.commit('getNavBarInfoList', arr)
			})
		},
		/*获取tabbar数据*/
		getTabBarStoreData(context){
			getTabBarData().then(res => {
				let arr = []
				for (let i = 0; i < res.length; i++) {
					let result = res.filter((j) => j.title == context.state.tabBarTitleList[i])
					arr.push(result)
				}
				context.commit('getTabBarList', arr)
			})
		}
	},
	modules: {}
})
