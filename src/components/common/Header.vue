<template>
	<div class="header">
		<div class="topBar">
			<div class="topBarTitle">
				<ul>
					<li><a @click="toHome" href="javascript:void(0)">小米商城</a></li>
					<li v-for="(item,index) in topBarTitles" :key="index"><a href="/about">{{item}}</a></li>
					<li class="download" @mouseover="appHover" @mouseleave="appLeave">
						<a @click="toAbout" href="javascript:void(0)">下载app</a>
						<div class="downloadImg" v-show="showDownload">
							<img src="../../assets/img/download.png" />
							<span>小米商城app</span>
						</div>
					</li>
					<li><a @click="toAbout" href="javascript:void(0)">Select Location</a></li>
				</ul>
			</div>
			<div class="topBarInfo">
				<a href="javascript:void(0)" class="cart" @mouseover="cartHover" @mouseleave="cartLeave">
					<div @click="toCart"><span class="iconfont icon-xiaomigouwuche"></span>购物车（{{$store.state.cartList.length}}）</div>
					<div class="cartInfo" v-show="showCartInfo">
						<ul class="cart_list" v-if="$store.state.cartList.length != 0">
							<li v-for="(item,i) in $store.state.cartList" :key="i">
								<a @click="toDetail(item.product_id)"  href="javascript:void(0)">
									<img :src="item.image" />
									<div><span :title="item.name+item.color">{{item.name}} {{item.color}}</span></br>{{item.serviceName}}</div>
								</a>
								<div class="price_count">
									<span>{{item.totalPrice}}元 × {{item.count}}</span>
									<i class="el-icon-close" @click.stop="removeProduct(i)"></i>
								</div>
							</li>
							<div class="to_account">
								<span>共 {{$store.state.cartList.length}} 件商品</span>
								<span class="total_price"></br>{{$store.state.totalPrice}}元</span>
								<Button class="button" @click.native="toCart">去购物车结算</Button>
							</div>
						</ul>
						<p v-else>购物车中还没有商品，赶紧选购吧！</p>
					</div>
				</a>
				<a @click="toAbout" href="javascript:void(0)">消息通知</a>
				<a @click="toAbout" href="javascript:void(0)">注册</a>
				<a @click="toAbout" href="javascript:void(0)">登录</a>
			</div>
		</div>
	</div>
</template>

<script>
	import Button from './Button.vue'
	export default {
		name: 'Header',
		components:{
			Button
		},
		data() {
			return {
				topBarTitles: [ 'MIUI', 'loT', '云服务', '金融', '有品', '小爱开放平台', '企业团购', '资质证照', '协议规则'],
				showCartInfo: false,
				showDownload: false
			};
		},
		methods: {
			cartHover() {
				this.showCartInfo = true
			},
			cartLeave() {
				this.showCartInfo = false
			},
			appHover() {
				this.showDownload = true
			},
			appLeave() {
				this.showDownload = false
			},
			toCart(){
				this.$router.push('/cart')
			},
			removeProduct(i){
				this.$store.commit('productRemove',i)
				this.$store.commit('getTotalPrice')
			},
			toAbout(){
				this.$router.push('/about')
			},
			toDetail(id){
				this.$router.push('/detail?product_id='+id)
			},
			toHome(){
				this.$router.push('/')
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.header {
		width: 100%;
		background-color: #333;
	}

	.topBar {
		display: flex;
		color: #B0B0B0;
		line-height: 40px;
		font-size: 12px;
		width: 1226px;
		margin: 0 auto;

		.topBarTitle {
			display: flex;
			flex: 3;

			ul {
				width: 100%;

				li {
					float: left;
					padding: 0 8px;

					a {
						display: block;
						height: 40px;
						color: #b0b0b0;
					}

					a:hover {
						color: #fff;
					}
				}

				.download {
					position: relative;

					.downloadImg {
						position: absolute;
						left: -33px;
						box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
						font-size: 14px;
						color: #333;
						padding: 15px 15px 0 15px;
						background-color: #fff;
						animation: fadeInDown;
						animation-duration: 0.5s;
						z-index: 13;

						img {
							width: 90px;
							height: 90px;
						}

						span {
							display: block;
							margin-top: -15px;
						}
					}
				}
			}
		}

		.topBarInfo {
			flex: 2;
			text-align: right;

			a,{
				padding: 0 8px;
				display: block;
				float: right;
				color: #b0b0b0;
			}

			a:hover{
				color: #fff;
			}
			
			.cart {
				position: relative;
				width: 120px;
				height: 40px;
				text-align: center;
				background-color: #424242;
				vertical-align: middle;
				.icon-xiaomigouwuche {
					padding: 3px;
				}

				.cartInfo {
					background-color: #fff;
					width: 316px;
					min-height: 100px;
					position: absolute;
					top: 40px;
					right: 0;
					box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
					color: #333;
					animation: fadeInDown;
					animation-duration: 0.5s;
					z-index: 16;
					padding-top: 20px;
					box-sizing: border-box;
					p{
						padding-top: 15px;
					}
					.cart_list {
						li {
							margin: 0 auto;
							width: 300px;
							height: 80px;
							padding-top: 10px;
							box-sizing: border-box;
							position: relative;
							background-color: #fff;
							border-bottom: 1px solid #ddd;

							a {
								float: none;
								display: flex;
								height: 70px;
								width: 190px;
								color: #333;
								line-height: none;
								padding: 0;

								img {
									height: 60px;
									width: 60px;
								}

								div {
									padding-top: 10px;
									overflow: hidden;
									text-overflow: ellipsis;
									display: -webkit-box;
									-webkit-line-clamp: 2;
									-webkit-box-orient: vertical;
									flex: 1;
									text-align: left;
									height: 60px;
									line-height: 16px;
									float: right;
									box-sizing: border-box;
								}
							}
							a:hover{
								color: #ff6700;
							}
							.price_count {
								width: 110px;
								height: 80px;
								line-height: 80px;
								position: absolute;
								top: 0;
								right: 0;

								.el-icon-close {
									width: 30px;
									height: 30px;
									font-size: 16px;
									color: #fff;
									line-height: 30px;
									position: absolute;
									right: 0;
									top: 25px;
									font-weight: 700;
								}

								.el-icon-close:hover {
									color: #000;
								}
							}
						}
						li:hover{
							 .el-icon-close{
								color: #999;
							}
						}
						li:last-child{
							border-bottom: none;
						}
						.to_account{
							height: 60px;
							background-color: #fbfbfb;
							text-align: left;
							padding: 10px 0 0 20px;
							line-height: 20px;
							.button{
								height: 40px;
								width: 140px;
								font-size: 14px;
								color: #fff;
								line-height: 40px;
								position: absolute;
								right: 10px;
								bottom: 10px;
							}
							.total_price{
								color: #ff6700;
								font-size: 16px;
							}
						}
					}
				}
			}

			.cart:hover {
				color: #ff6700;
				background-color: #fff;
			}
		}
	}
</style>
