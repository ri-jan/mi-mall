<template>
	<div>
		<!-- 商品名字 -->
		<div class="product_name"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c4226c735bb4032afeb41c0e0f469fb5.jpg" />{{productInfo.name}}</div>
		<!-- 商品描述 -->
		<p class="product_desc">
			<span>「到手价仅{{productInfo.lowprice}}元；+1元得50GB云空间月卡」</span>
			<span v-if="productInfo.desc">{{productInfo.desc}}</span>
			<span v-else>该商品暂时还没有具体的描述哦~</span>
		</p>
		<p class="proprietary">小米自营</p>
		<!-- 商品标价 -->
		<p class="product_price">{{productInfo.lowprice}} 元</p>
		<!-- 选择配送地址 -->
		<div class="city">
			<span class="iconfont icon-didian"></span>
			<div class="detailed_city">北京 北京市 海淀区 清河街道 <a href="javascript:void(0);">修改</a><br /><span>有现货</span></div>
		</div>
		<!-- 选择商品属性 -->
		<div class="select_type">
			<!-- 选择颜色 -->
			<p>选择颜色</p>
			<ul class="type_list clear-fix">
				<li><a @click="selectColor(1)" :class="{'isSelect':currentColor == 1}" href="javascript:void(0);">白色</a></li>
				<li><a @click="selectColor(2)" :class="{'isSelect':currentColor == 2}" href="javascript:void(0);">黑色</a></li>
			</ul>
			<!-- 选择延长保修服务 -->
			<p>选择小米提供的延长保修</p>
			<div class="service" @click="serviceClick" :class="{'isChecked':checked}">
				<el-checkbox v-model="checked" class="checkbox_first"></el-checkbox>
				<img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583983259.46159756.png" />
				<div class="service_name"><span>云空间月卡50G</span><span>已省5元</span></div>
				<span class="service_desc">厂保延一年，性能故障免费维修</span></br>
				<el-checkbox v-model="checked"></el-checkbox>
				<span> 我已阅读</span>
				<a @click="toAbout" href="javascript:void(0);"> 服务条款</a>
				<span> | </span>
				<a @click="toAbout" href="javascript:void(0);">常见问题</a>
				<span class="service_price">1元</span>
			</div>
		</div>
		<!-- 确认选择商品信息 -->
		<div class="final_info">
			<div class="info_item"><span>{{productInfo.name}} {{productColor}}</span><span class="lowprice">{{productInfo.lowprice}}元</span><span
				 v-if="productInfo.highprice" class="highprice">{{productInfo.highprice}}元</span></div>
			<div class="info_item" v-if="checked"><span>{{serviceName}}</span><span class="lowprice">{{servicePrice}}元</span></div>
			<p>总计：{{totalPrice}}元</p>
		</div>
		<!-- 加入购物车按钮 -->
		<div class="join_cart"><a href="javascript:void(0);" @click="joinCart">加入购物车</a></div>
	</div>
</template>

<script>
	import {
		Product
	} from '../../assets/js/utils.js'
	export default {
		name: 'DetailProductInfo',
		data() {
			return {
				currentColor: 1,
				productColor: '白色',
				checked: false,
				serviceName: '',
				servicePrice: 0
			}
		},
		computed: {
			cartList() {
				return this.$store.state.cartList
			},
			totalPrice() {
				return this.productInfo.lowprice + this.servicePrice
			}
		},
		props: {
			productInfo: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		methods: {
			selectColor(i) {
				this.currentColor = i
				if (i == 1) {
					this.productColor = '白色'
				} else {
					this.productColor = '黑色'
				}
			},
			joinCart() {
				let finalProduct = new Product(this.productInfo, this.productColor, this.totalPrice, this.serviceName, this.servicePrice)
				let isInCart = this.cartList.find(item => {
					return item.name == finalProduct.name && item.color == finalProduct.color && item.serviceName == finalProduct.serviceName
				})
				if (!isInCart) {
					finalProduct.count = 1
					this.$store.commit('joinCart', finalProduct)
				} else {
					isInCart.serviceName = this.serviceName ? this.serviceName : isInCart.serviceName
					isInCart.servicePrice = this.servicePrice ? this.servicePrice : isInCart.servicePrice
					this.$store.commit('productCountAdd', isInCart)
				}
				this.$store.commit('getTotalPrice')
				this.$alert('成功加入购物车！', '消息', {
					confirmButtonText: '确定',
				}).catch(e=>e);
			},
			serviceClick() {
				this.checked = !this.checked
				if (this.checked) {
					this.serviceName = '云空间月卡50G'
					this.servicePrice = 1
				} else {
					this.serviceName = ''
					this.servicePrice = 0
				}
			},
			toAbout(){
				this.$router.push('/about')
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.product_name {
		text-align: left;
		font-size: 24px;

		img {
			width: 50px;
			height: 24px;
		}
	}

	.product_desc {
		padding: 14px 0;
		color: #b0b0b0;
		text-align: left;

		span:first-child {
			color: #ff6700;
		}
	}

	.proprietary {
		text-align: left;
		color: #ff6700;
	}

	.product_price {
		padding: 14px 0 20px;
		text-align: left;
		color: #ff6700;
		font-size: 20px;
		border-bottom: 1px solid #ddd;
	}

	.city {
		margin-top: 14px;
		height: 100px;
		width: 100%;
		border: 1px solid #ddd;
		background-color: #fafafa;
		padding-left: 24px;
		text-align: left;
		display: flex;
		align-items: center;
		line-height: 24px;
		font-size: 14px;

		a,
		span {
			color: #ff6700;
		}

		.iconfont {
			color: #999;
			font-size: 20px;
			transform: translateY(-10px);
			margin-right: 10px;
		}
	}

	.select_type {
		margin-top: 14px;

		p {
			text-align: left;
			font-size: 20px;
		}

		.type_list {
			padding-bottom: 14px;

			li {
				height: 44px;
				width: 294px;
				float: left;
				margin-right: 13px;
				margin-top: 10px;
				line-height: 44px;

				a {
					display: block;
					height: 100%;
					width: 100%;
					border: 1px solid #ddd;
					transition: all 0.2s;
					cursor: pointer;
					color: #757575;
				}

				a:hover {
					color: #ff6700;
					border-color: #ff6700;
				}

				.isSelect {
					color: #ff6700;
					border-color: #ff6700;
				}
			}

			li:nth-child(even) {
				margin-right: 0;
			}
		}

		.service {
			height: 146px;
			width: 100%;
			border: 1px solid #ddd;
			margin-top: 14px;
			padding: 30px 0 0 120px;
			text-align: left;
			cursor: pointer;
			position: relative;

			img {
				height: 50px;
				width: 50px;
				position: absolute;
				top: 48px;
				left: 50px;
			}

			.service_name {
				height: 25px;
				font-size: 20px;
				text-align: left;
				margin-bottom: 10px;

				span:last-child {
					display: inline-block;
					line-height: 25px;
					height: 25px;
					width: 70px;
					color: #fff;
					background-color: #ff6700;
					border-radius: 15px;
					font-size: 14px;
					font-weight: 600;
					text-align: center;
				}
			}

			.service_desc {
				display: inline-block;
				color: #b0b0b0;
				margin-bottom: 14px;
			}

			/deep/ .checkbox_first {
				position: absolute;
				top: 66px;
				left: 20px;

				.el-checkbox__inner:first-child {
					border-radius: 50%;
				}
			}

			a {
				color: #ff6700;
			}

			.service_price {
				position: absolute;
				right: 30px;
			}
		}

		.isChecked {
			border-color: #ff6700;

			.service_name {
				color: #ff6700;
			}
		}
	}

	.final_info {
		min-height: 145px;
		width: 100%;
		background-color: #f9f9fa;
		margin: 24px 0;
		padding: 30px;

		.info_item {
			padding-top: 15px;
			color: #616161;
			text-align: right;

			span:first-child {
				float: left;
			}

			.highprice {
				text-decoration: line-through;
			}
		}

		p {
			color: #ff6700;
			padding-top: 20px;
			text-align: left;
			font-size: 24px;
		}
	}

	.join_cart {
		a {
			display: block;
			height: 54px;
			width: 300px;
			background-color: #ff6700;
			color: #fff;
			line-height: 54px;
			font-size: 20px;
			transition: all 0.2s;
		}

		a:hover {
			background-color: #f25807;
		}
	}
	
</style>

