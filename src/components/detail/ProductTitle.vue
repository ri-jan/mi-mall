<template>
	<div class="product_title">
		<div>
			<span>{{productName}}</span>
			<!-- <a :href="this.$route.fullPath">概述<span>|</span></a> -->
			<a @click="toAbout" href="javascript:void(0)">参数<span>|</span></a>
			<a @click="toAbout" href="javascript:void(0)">F码通道<span>|</span></a>
			<a @click="toAbout" href="javascript:void(0)">咨询客服<span>|</span></a>
			<a @click="toAbout" href="javascript:void(0)">用户评价 </a>
		</div>
	</div>
</template>

<script>
	export default{
		name:'ProductTitle',
		props:{
			productName:{
				type:String,
				default:''
			}
		},
		methods:{
			toAbout(){
				this.$router.push('/about')
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.product_title {
		width: 100%;
		height: 60px;
		border-bottom: 1px solid #ddd;
		box-shadow: 0 5px 5px rgba(0,0,0,.07);
		position: sticky;
		top: 0;
		background-color: #fff;
		z-index: 10;
		div{
			height: 100%;
			width: 1226px;
			margin: 0 auto;
			line-height: 60px;
			text-align: right;
			>span{
				float: left;
				color: #000;
				font-size: 20px;
			}
			a{
				color: #616161;
				span{
					padding: 0 10px;
					color: #ccc;
				}
			}
			a:hover{
				color: #ff6700;
			}
		}
	}
</style>
