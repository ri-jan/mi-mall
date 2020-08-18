<template>
	<div class="home">
		<div>
			<!-- 头部 -->
			<Header class="header"></Header>
			<!-- 头部分类选项卡 -->
			<NavBar class="homeNavBar" :navBarList="$store.state.navBarList" :navBarInfoList="$store.state.navBarInfoList">
				<template v-slot:title>
					<div class="mi816"></div>
				</template>
			</NavBar>
			<!-- 轮播图 -->
			<HomeSwiper :bannerList="bannerList"></HomeSwiper>
			<!-- 全部分类选项卡 -->
			<HomeTabBar :tabbarTitleList="$store.state.tabBarTitleList" :tabbarList="$store.state.tabBarList"></HomeTabBar>
			<!-- 功能通道（小米秒杀、企业团购......） -->
			<Channel></Channel>
			<!-- 小米闪购 -->
			<FlashSale class="home-main" :flashSaleList="flashSaleList"></FlashSale>
			<!-- 手机横幅广告及手机商品展示 -->
			<Advertising :advertisingImg="advertisingImg[0]" :index="0"></Advertising>
			<Brick :brickTitle="brickTitleList[0]" :brickLeftImg="brickLeftImg[0]" :itemList="phoneList" :isShowMore="false" :index="0"></Brick>
			<!-- 家电横幅广告及家电商品展示 -->
			<Advertising :advertisingImg="advertisingImg[1]" :index="1"></Advertising>
			<Brick :brickTitle="brickTitleList[1]" :brickLeftImg="brickLeftImg[1]" :itemList="homeApplianceTV" :isShowMore="true"
			 :brickItemCategory="brickItemCategoryList[0]" :index="1"></Brick>
			<!-- 智能横幅广告及智能、安防、出行（箱包）商品展示 -->
			<Advertising :advertisingImg="advertisingImg[2]" :index="2"></Advertising>
			<Brick :brickTitle="brickTitleList[2]" :brickLeftImg="brickLeftImg[2]" :itemList="smartSecurityBags" :isShowMore="true"
			 :brickItemCategory="brickItemCategoryList[1]" :index="2"></Brick>
			<!-- 搭配横幅广告及耳机音箱商品展示 -->
			<Advertising :advertisingImg="advertisingImg[3]" :index="3"></Advertising>
			<Brick :brickTitle="brickTitleList[3]" :brickLeftImg="brickLeftImg[3]" :itemList="collocationHeadsetStereo"
			 :isShowMore="true" :brickItemCategory="brickItemCategoryList[2]" :index="3"></Brick>
			<!-- 配件横幅广告及配件、充电器商品展示 -->
			<Advertising :advertisingImg="advertisingImg[4]" :index="4"></Advertising>
			<Brick :brickTitle="brickTitleList[4]" :brickLeftImg="brickLeftImg[4]" :itemList="accessoriesCharger" :isShowMore="true"
			 :brickItemCategory="brickItemCategoryList[3]" :index="4"></Brick>
			<!-- 周边横幅广告及周边商品展示 -->
			<Advertising :advertisingImg="advertisingImg[5]" :index="5"></Advertising>
			<Brick :brickTitle="brickTitleList[5]" :brickLeftImg="brickLeftImg[5]" :itemList="mijoy" :isShowMore="false"
			 :brickItemCategory="brickItemCategoryList[4]" :index="5"></Brick>
			<!-- 中性笔广告？ -->
			<Advertising :advertisingImg="advertisingImg[6]" :index="6"></Advertising>
			<!-- 发布会视频 -->
			<MiVideo :miVideo="miVideo"></MiVideo>
			<!-- 底部信息展示 -->
			<Footer></Footer>
			<!-- 侧边导航栏 -->
			<Slidebar></Slidebar>
			<!-- 返回顶部 -->
			<BackTop></BackTop>
		</div>
	</div>
</template>

<script>
	// 获取服务器数据相关
	import {
		getBannerData,
		getFlashSaleData,
		getPhoneData,
		getHomeApplianceData,
		getTVData,
		getSmartData,
		getBagsData,
		getCollocationData,
		getHeadsetData,
		getStereoData,
		getAccessoriesData,
		getChargerData,
		getMijoyData,
		getMiVideoData,
	} from '@/network/getHomeDta.js'

	// 获取本地静态数据相关
	import homeStaticData from '@/assets/js/homeStaticData.js'

	// 子组件
	import Header from '../components/common/Header.vue'
	import NavBar from '../components/home/NavBar.vue'
	import HomeSwiper from '../components/home/HomeSwiper.vue'
	import HomeTabBar from '../components/home/HomeTabBar.vue'
	import Channel from '../components/home/Channel.vue'
	import FlashSale from '../components/home/FlashSale.vue'
	import Advertising from '../components/common/Advertising.vue'
	import Brick from '../components/common/Brick.vue'
	import MiVideo from '../components/home/MiVideo.vue'
	import Footer from '../components/common/Footer.vue'
	import Slidebar from '../components/common/Slidebar.vue'
	import BackTop from '../components/common/BackTop.vue'


	export default {
		name: 'Home',
		data() {
			return homeStaticData
		},
		components: {
			Header,
			NavBar,
			HomeSwiper,
			HomeTabBar,
			Channel,
			FlashSale,
			Advertising,
			Brick,
			MiVideo,
			Footer,
			Slidebar,
			BackTop
		},
		created() {
			/*获取navbar数据*/
			this.$store.dispatch('getNavBarStoreData')
			/*获取banner数据*/
			getBannerData().then(res => {
					this.bannerList = res
				}),
				/*获取tabbar数据*/
				this.$store.dispatch('getTabBarStoreData')
			/*获取闪购数据*/
			getFlashSaleData().then(res => {
					for (let i = 0; i < res.length; i += 4) {
						this.flashSaleList.push(res.slice(i, i + 4));
					}
				}),
				/*获取手机数据*/
				getPhoneData().then(res => {
					this.phoneList.push(res.slice(0, 8))
					this.phoneList.push(res.slice(8, 16))
				}),
				/*获取家电数据*/
				getHomeApplianceData().then(res => {
					this.homeApplianceTV.push(res.slice(0, 8))
				}),
				/*获取家电数据*/
				getTVData().then(res => {
					this.homeApplianceTV.push(res.slice(0, 8))
				}),
				/*获取智能数据*/
				getSmartData().then(res => {
					this.smartSecurityBags.push(res.slice(0, 8))
				}),
				/*获取出行（箱包）数据*/
				getBagsData().then(res => {
					this.smartSecurityBags.push(res.slice(0, 8))
				}),
				/*获取搭配数据*/
				getCollocationData().then(res => {
					this.collocationHeadsetStereo.push(res.slice(0, 8))
				}),
				/*获取耳机数据*/
				getHeadsetData().then(res => {
					this.collocationHeadsetStereo.push(res.slice(0, 8))
				}),
				/*获取音箱数据*/
				getStereoData().then(res => {
					this.collocationHeadsetStereo.push(res.slice(0, 8))
				}),
				/*获取配件数据*/
				getAccessoriesData().then(res => {
					this.accessoriesCharger.push(res.slice(0, 8))
				}),
				/*获取充电器数据*/
				getChargerData().then(res => {
					this.accessoriesCharger.push(res.slice(0, 8))
				}),
				/*获取周边数据*/
				getMijoyData().then(res => {
					this.mijoy.push(res.slice(0, 8))
				}),
				/*获取发布会视频数据*/
				getMiVideoData().then(res => {
					this.miVideo = res
				})

		}
	}
</script>

<style lang="less" scoped="scoped">
	.home {
		font-size: 20px;
		position: relative;
		height: 3000px;
	}

	.home-main {
		background-color: #f5f5f5;
	}

.homeNavBar {
	.mi816 {
		background-image: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b06819007feedbea62aedaa3089633d2.gif?w=165&h=55);
		width: 165px;
		height: 55px;
		transform: translateY((100-55)/2px);
		}
}
</style>
