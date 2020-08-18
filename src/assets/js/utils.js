/*将小于10的数字转换成两位数的字符串*/
export function toDoubleDigit(num){
	if(num < 10){
		return '0'+ num
	}else{
		return num
	}
}


/*构造加入购物车的商品*/
export class Product{
	constructor(product,color,totalPrice,serviceName,servicePrice) {
	    this.name = product.name
			this.product_id = product.product_id
			this.image = product.image
			this.lowprice = product.lowprice
			this.highprice = product.highprice
			this.serviceName = serviceName
			this.servicePrice = servicePrice
			this.color = color
			this.totalPrice = totalPrice
			this.selected = true
	}
}