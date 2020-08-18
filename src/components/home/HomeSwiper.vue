<template>
	<div class="swiper">
		<el-carousel :interval="5000" arrow="always" trigger="click">
			<el-carousel-item v-for="(item,i) in bannerList" :key="i">
				<a href="javascript:void(0)" @click="toDetails(hrefList[i])"><img v-lazy="item.image" /></a>
			</el-carousel-item>
		</el-carousel>
	</div>

</template>

<script>
	export default {
		name: 'HomeSwiper',
		data(){
			return {
				/*商品路由列表*/
				hrefList:['/about','/detail?product_id=10000223','/detail?product_id=1203000022','/about','/about']
			}
		},
		props:{
			bannerList:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			toDetails(str){
				this.$router.push(str)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.swiper {
		height: 460px;
		width: 1226px;
		margin: 0 auto;
		background-color: #ccc;

		/deep/.el-carousel__container {
			height: 460px;
			img{
				width: 100%;
				height: 100%;
			}
			.el-carousel__arrow--left{
				left: 234px;
			}
		}

	}

</style>
