import request from '@/network/request.js'

/*获取banner数据*/
export function getBannerData(){
	return request({
		url:'/banner',
		method:'get'
	})
}

/*获取flashsale数据*/
export function getFlashSaleData(){
	return request({
		url:'/flashsale',
		method:'get'
	})
}
/*获取手机数据*/
export function getPhoneData(){
	return request({
		url:'/phone',
		method:'get'
	})
}
/*获取家电数据*/
export function getHomeApplianceData(){
	return request({
		url:'/home_appliance',
		method:'get'
	})
}
/*获取电视数据*/
export function getTVData(){
	return request({
		url:'/tv',
		method:'get'
	})
}
/*获取智能数据*/
export function getSmartData(){
	return request({
		url:'/smart',
		method:'get'
	})
}
/*获取出行（箱包）数据*/
export function getBagsData(){
	return request({
		url:'/bags',
		method:'get'
	})
}
/*获取搭配数据*/
export function getCollocationData(){
	return request({
		url:'/collocation',
		method:'get'
	})
}
/*获取耳机音箱数据*/
export function getHeadsetData(){
	return request({
		url:'/headset',
		method:'get'
	})
}
/*获取音箱数据*/
export function getStereoData(){
	return request({
		url:'/stereo',
		method:'get'
	})
}
/*获取配件数据*/
export function getAccessoriesData(){
	return request({
		url:'/accessories',
		method:'get'
	})
}
/*获取充电器数据*/
export function getChargerData(){
	return request({
		url:'/charger',
		method:'get'
	})
}
/*获取周边数据*/
export function getMijoyData(){
	return request({
		url:'/mijoy',
		method:'get'
	})
}

/*获取发布会视频数据*/
export function getMiVideoData(){
	return request({
		url:'/mi_video',
		method:'get'
	})
}



