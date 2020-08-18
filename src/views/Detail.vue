<template>
	<div class="detail">
		<!-- 页面头部 -->
		<Header class="header"></Header>
		<!-- navbar -->
		<NavBar :navBarList="$store.state.navBarList" :navBarInfoList="$store.state.navBarInfoList"><template v-slot:title><a class="all-category" @mouseenter="tabbarHover" @mouseleave="tabbarLeave">全部分类</a></template>
		</NavBar>
		<!-- tabbar引用了首页的tabbar -->
		<HomeTabBar class="tabbar" :tabbarTitleList="$store.state.tabBarTitleList" :tabbarList="$store.state.tabBarList" v-show="tabBarIsActive" @mouseenter.native="tabbarHover" @mouseleave.native="tabbarLeave">
		</HomeTabBar>
		<!-- 商品详情展示 -->
		<div class="detail-main">
			<!-- 商品标题 -->
			<ProductTitle :productName="productInfo.name"></ProductTitle>
			<!-- 商品信息 -->
			<div class="product_info">
				<DetailSwiper class="info_left" :productImg="productInfo.image"></DetailSwiper>
				<DetailProductInfo class="info_right" :productInfo="productInfo"></DetailProductInfo>
			</div>
		</div>
		<PriceInstructions></PriceInstructions>
		<Slidebar></Slidebar>
		<BackTop></BackTop>
		<Footer></Footer>
	</div>
</template>

<script>
	// 子组件导入
	import Header from '../components/common/Header.vue'
	import NavBar from '../components/home/NavBar.vue'
	import HomeTabBar from '../components/home/HomeTabBar.vue'
	import ProductTitle from '../components/detail/ProductTitle.vue'
	import DetailSwiper from '../components/detail/DetailSwiper.vue'
	import DetailProductInfo from '../components/detail/DetailProductInfo.vue'
	import PriceInstructions from '../components/common/PriceInstructions.vue'
	import Footer from '../components/common/Footer.vue'
	import Slidebar from '../components/common/Slidebar.vue'
	import BackTop from '../components/common/BackTop.vue'


	// 获取数据
	import {
		getDetailData
	} from '../network/getDetailData.js'
	export default {
		name: 'Detail',
		data() {
			return {
				tabBarIsActive: false,
				productInfo: {}
			}
		},
		components: {
			Header,
			NavBar,
			HomeTabBar,
			ProductTitle,
			DetailSwiper,
			DetailProductInfo,
			PriceInstructions,
			Footer,
			Slidebar,
			BackTop
		},
		created() {
			/*获取商品详情*/
			getDetailData(this.$route.query.product_id).then(res => {
				this.productInfo = res[0]
			})
			/*获取navbar数据*/
			this.$store.dispatch('getNavBarStoreData')
			/*获取tabbar数据*/
			this.$store.dispatch('getTabBarStoreData')
		},
		watch:{
			$route(){
				/*获取商品详情*/
				getDetailData(this.$route.query.product_id).then(res => {
					this.productInfo = res[0]
				})
				/*获取navbar数据*/
				this.$store.dispatch('getNavBarStoreData')
				/*获取tabbar数据*/
				this.$store.dispatch('getTabBarStoreData')
			}
		},
		methods: {
			tabbarHover() {
				this.tabBarIsActive = true
			},
			tabbarLeave() {
				this.tabBarIsActive = false
			}
		},
		mounted() {
			window.scrollTo(0,0)
		}
	}
</script>

<style scoped="scoped" lang="less">
	.detail {
		min-width: 1226px;
		.all-category {
			display: block;
			height: 100%;
			width: 100%;
		}

		.tabbar {
			transform: translateY(460px);
			position: relative;
			z-index: 12;
			/deep/ .title-ul{
				background-color: #fff;
				border: 1px solid #ff6700;
				.title-li .title-a span{
					color: #333;
				}
				.title-li .title-a span:last-child{
					color: #ddd;
				}
				.title-li .title-a:hover span{
					color: #fff;
				}
			}
		}

		.detail-main {
			border-top: 1px solid #ddd;
			.product_info{
				width: 1226px;
				margin: 0 auto;
				display: flex;
				padding-bottom: 20px;
				.info_left{
					flex: 1;
					padding: 32px 20px 0 0;
				}
				.info_right{
					flex: 1;
					padding: 32px 0;
				}
			}
		}

		
	}
</style>
