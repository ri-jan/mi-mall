<template>
	<div class="tabbar">
		<div class="homeCategory">
			<ul class="title-ul">
				<li class="title-li" v-for="(item,i) in tabbarTitleList" :key="i" @mouseenter="mouseOn(i)" @mouseleave="mouseOut">
					<a class="title-a" href="javascript: void(0);" >
						<span class="tabBarTitle">{{item}}</span>
						<span class="iconfont icon-jiantou-copy"></span>
					</a>
					<div class="tabBarItem tabActive" v-show="currentIndex == i">
						<ul>
							<li v-for="(item1,index) in tabbarList[i]" :key="index">
								<a href="javascript:void(0)" @click="toAbout">
									<img v-lazy="item1.image" />
									<span>{{item1.category}}</span>
								</a>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HomeTabBar',
		data() {
			return {
				tabActive: false,
				currentIndex: 999
			}
		},
		props:{
			tabbarTitleList:{
				type:Array,
				default(){
					return []
				}
			},
			tabbarList:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods: {
			mouseOn(i) {
				this.currentIndex = i
			},
			mouseOut() {
				this.currentIndex = 999
			},
			toAbout(){
				this.$router.push('/about')
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.tabbar {
		position: relative;
		width: 1226px;
		margin: 0 auto;
	}

	.homeCategory {
		height: 460px;
		background-color: rgba(105, 101, 101, .6);
		width: 234px;
		position: absolute;
		top: -460px;
		left: 0;
		right: 0;
		z-index: 3;

		.title-ul {
			height: 100%;
			padding: 20px 0;

			.title-li {

				color: #fff;
				font-size: 14px;
				height: 10%;
				// border: 1px solid red;
				line-height: 42px;
				text-align: left;

				.title-a {
					display: flex;
					height: 100%;
					width: 100%;
					padding: 0 20px;
					

					.tabBarTitle {
						flex: 9;
						color:#fff;
					}

					.icon-jiantou-copy {
						flex: 1;
						color:#fff;
					}
				}

				.title-a:hover {
					background-color: #ff6700;

					.icon-jiantou-copy {
						color: #aaa;
					}
				}

				.tabBarItem {
					width: 1226px-234px;
					height: 460px;
					background-color: #fff;
					position: absolute;
					left: 234px;
					top: 0;
					border: 1px solid #ddd;
					box-shadow: 0 8px 16px rgba(0, 0, 0, .18);
					ul{
						width: 100%;
						li{
							float: left;
							width: 25%;
							a{
								height: 76px;
								width: 100%;
								padding: 10px;
								display: flex;
								img{
									flex: 2;
									width: 40px;
									height: 40px;
									margin: 8px;
								}
								span{
									flex: 8;
									font-size: 14px;
									line-height: 56px;
									color: #333;
								}
							}
							a:hover span{
								color: #ff6700;
							}
						}
					}
				}
			}


		}
	}
</style>
