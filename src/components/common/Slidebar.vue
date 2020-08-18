<template>
	<div class="slidebar">
		<a href="javascript: void(0);">
			<span class="iconfont icon-shouji"></span>手机APP
			<div class="appImg"><img src="https://i8.mifile.cn/b2c-mimall-media/93650133310ec1c385487417a472a26c.png" />扫码领取新人百元礼包</div>
		</a>
		<a href="javascript:void(0)" @click="toAbout"><span class="iconfont icon-gerenzhongxinwoderenwubiaozhuntouxianxingcopy"></span>个人中心</a>
		<a href="javascript:void(0)" @click="toAbout"><span class="iconfont icon-weixiu"></span>售后服务</a>
		<a href="javascript:void(0)" @click="toAbout"><span class="iconfont icon-kefu"></span>人工客服</a>
		<a href="javascript:void(0)" @click="toCart"><span class="iconfont icon-xiaomigouwuche"></span>购物车<i v-if="$store.state.cartList.length !=0">{{$store.state.cartList.length}}</i></a>
	</div>
</template>

<script>
	export default {
		name: 'Slidebar',
		methods:{
			toAbout(){
				this.$router.push('/about')
			},
			toCart(){
				this.$router.push('/cart')
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.slidebar {
		width: 80px;
		height: 450px;
		background-color: #fff;
		position: fixed;
		right: 0;
		top: 100px;
		z-index: 99;

		a {
			display: block;
			height: 20%;
			width: 100%;
			border: 1px solid #f5f5f5;
			font-size: 16px;
			color: #757575;
			padding-top: 15px;
			position: relative;

			span {
				display: block;
				font-size: 30px;
			}

			.appImg {
				padding: 10px;
				width: 120px;
				height: 160px;
				background-color: #fff;
				color: #757575;
				border: 1px solid #f5f5f5;
				display: none;

				img {
					width: 100px;
					height: 100px;
				}

				position: absolute;
				top: 0;
				right: 80px;
				z-index: 12;
			}
			i{
				position: absolute;
				top: 10px;
				right: 10px;
				color: #fff;
				background-color: #ff6700;
				height: 20px;
				width: 20px;
				border-radius: 50%;
				line-height: 20px;
			}
		}

		a:hover {
			color: #ff6700;
			animation: pulse;
			animation-duration: 0.5s;

			.appImg {
				display: block;
				animation: fadeIn;
				animation-duration: 0.5s;
			}
		}
	}
</style>
