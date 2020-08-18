<template>
	<div class="cart_header">
		<div class="cart_title">
			<div class="logo">
				<a @click="toHome" title="小米官网" href="javascript:void(0)">
					<img src="~@/assets/img/mi-logo.png" />
					<img src="~@/assets/img/mi-home.png" />
				</a>
			</div>
			<span class="my_cart">我的购物车</span>
			<div class="user_info">
				<a @click="toAbout" href="javascript:void(0)">登录</a><span>丨</span><a href="javascript:void(0)" @click="toAbout">注册</a>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'CartHeader',
		methods:{
			toHome(){
				this.$router.push('/')
			},
			toAbout(){
				this.$router.push('/about')
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.cart_header{
		width: 100%;
		min-width: 1226px;
		background-color: #fff;
		border-bottom: 2px solid #ff6700;
		.cart_title{
			width: 1226px;
			height: 100px;
			margin: 0 auto;
			text-align: left;
			line-height: 100px;
			display: inline-block;
			.logo {
				width: 55px;
				height: 55px;
				background-color: #ff6700;
				transform: translateY(16px);
				overflow: hidden;
				display: inline-block;
				a {
					display: block;
					width: 110px;
					height: 55px;
					transition: all 0.1s;
					align-items: center;
			
					img {
						height: 55px;
						width: 55px;
					}
				}
			
				a:hover {
					transform: translateX(-50%)
				}
			}
			.my_cart{
				margin-left: 50px;
				font-size: 30px;
			}
			.user_info{
				display: inline-block;
				font-size: 12px;
				color: #b0b0b0;
				float: right;
				a{
					display: inline-block;
					color: #757575;
				}
				a:hover{
					color: #ff6700;
				}
			}
		}
	}
	
</style>
