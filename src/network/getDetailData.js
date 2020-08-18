import request from '@/network/request.js'
/*获取全部商品详情数据*/
export function getDetailData(product_id){
	return request({
		url:'/detail',
		method:'get',
		params:{
			product_id
		}
	})
}