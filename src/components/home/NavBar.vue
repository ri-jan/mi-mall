<template>
	<div class="navBar">
		<div class="logo">
			<a @click="toHome" title="小米官网" href="javascript:void(0)">
				<img src="~@/assets/img/mi-logo.png" />
				<img src="~@/assets/img/mi-home.png" />
			</a>
		</div>
		<div class="mainNavBar">
			<ul>
				<li>
					<a @click="toAbout" href="javascript:void(0)">
						<slot name="title"></slot>
					</a>
					<div>
						<slot name="info"></slot>
					</div>
				</li>
				<li @mouseenter="mainNavHover(i)" @mouseleave="mainNavLeave(i)" :class="{mainNavActive:currentIndex==i}" v-for="(item,i) in navBarList"
				 :key="i">
					<a href="javascript: void(0);">{{item}}</a>
					<div class="mainNavInfo" :class="{mainNavInfoActive:currentIndex==i}">
						<ul class="navInfoList">
							<li v-for="(item,index) in navBarInfoList[i]" :key="index">
								<a @click="toDetail(item.id)" href="javascript:void(0)">
									<div class="navImage"><img v-lazy="item.image"></div>
									<div class="navInfoTitle">
										<span>{{item.title}}</span>
										<span class="navPrice">{{item.price}}</span>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</li>
				<li><a class="service" @click="toAbout" href="javascript:void(0)">服务</a></li>
				<li><a class="community" @click="toAbout" href="javascript:void(0)">社区</a></li>
			</ul>
		</div>
		<div class="search">
				<input type="search" class="inline-input" placeholder="手机" @focus="inputFocus" @focusout="inputFocusOut"/>
				<div class="searchList" v-show="isShowSearch">
					<ul>
						<li v-for="(item,i) in searchList" :key="i"><a @click="toAbout" href="javascript:void(0)">{{item}}</a></li>
					</ul>
				</div>
				<div><a @click="toAbout" class="iconfont icon-sousuo" href="javascript:void(0)"></a></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'NavBar',
		props: {
			navBarList: {
				type: Array,
				default () {
					return {}
				}
			},
			navBarInfoList: {
				type: Array,
				default () {
					return {}
				}
			}
		},
		data() {
			return {
				currentIndex: 7,
				restaurants: [],
				state1: '',
				isShowSearch:false,
				searchList:['黑鲨腾讯游戏手机3S','米家定制T恤','空调','小米10','扫地机器人','全部商品','米家插线板 快充版 27W','Redmi 手环']
			}
		},
		methods: {
			mainNavHover(i) {
				this.currentIndex = i
			},
			mainNavLeave(i) {
				this.currentIndex = 7
			},
			inputFocus(){
				this.isShowSearch = true
			},
			inputFocusOut(){
				this.isShowSearch = false
			},
			toHome(){
				this.$router.push('/')
			},
			toAbout(){
				this.$router.push('/about')
			},
			toDetail(id){
				this.$router.push('/detail?product_id='+id)
			}
		}

	}
</script>

<style lang="less" scoped="scoped">
	.navBar {
		display: flex;
		width: 1226px;
		margin: 0 auto;
		height: 100px;
		// position: relative;
		// z-index: 3;
		.logo {
			width: 55px;
			height: 55px;
			background-color: #ff6700;
			transform: translateY((100-55)/2px);
			overflow: hidden;

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

		.mainNavBar {
			// position: relative;
			// z-index: 2;
			flex: 8;
			padding-left: 10px;
			font-size: 16px;

			li {
				float: left;
				height: 100%;
				line-height: 100px;
				padding: 0 10px;
			}
			a:hover{
				color: #ff6700;
			}

			.service:hover,.community:hover{
				color: #ff6700;
			}
			.mainNavInfo {
				display: none;
				position: absolute;
				height: 220px;
				left:0;
				z-index: 12;
				.navInfoList {
					width: 1226px;
					height: 218px;
					margin: 0 auto;
					font-size: 12px;
					background-color: #fff;
					li {
						display: block;
						height: 100%;
						width: 1226/6px;
						box-sizing: border-box;
						padding: 30px 0 10px 0;
						position: relative;
						.navImage {
							height: 110px;
							border-right: 1px solid #ddd;
							img {
								height: 110px;
								width: 160px;
							}
						}
						.navInfoTitle {
							height: 80px;
							width: 100%;
							position: absolute;
							bottom: 30px;
							span {
								color: #333;
								display: block;
								width: 100%;
								height: 20px;
							}
							.navPrice{
								color: #ff6700;
							}
						}
					}
					li:last-child{
						.navImage{
							border-right: none;
						}
					}
				}
			}

			.mainNavInfoActive {
				display: block;
				height: 220px;
				width: 100vw;
				// animation: fadeInDown;
				// animation-duration: 0.5s;
				z-index: 12;
				background-color: #fff;
				border-top: 1px solid #ddd;
				border-bottom: 1px solid #ddd;
				box-shadow: 0 2px 4px rgba(0,0,0,.2);
			}
		}

		.search {
			flex: 3;
			line-height: 100px;
			position: relative;

			.inline-input{
				height: 50px;
				width: 250px;
				border-radius: 0;
				border: 1px solid #ddd;
				box-sizing: border-box;
				position: absolute;
				top: 25px;
				left: 17px;
				right: 0;
				font-size: 14px;
				padding: 10px;
				color: #666;
				line-height: 50px;
			}
			.inline-input:focus{
				border-color: #ff6700;
				outline: none;
			}
			.icon-sousuo {
				display: block;
				height: 50px;
				width: 50px;
				border: 1px solid #ddd;
				position: absolute;
				right: 0;
				top: 25px;
				text-align: center;
				line-height: 50px;
				border-left: none;
			}

			.icon-sousuo:hover {
				color: #fff;
				background-color: #ff6700;
			}
			.searchList{
				width: 250px;
				height: 250px;
				border: 1px solid #ff6700;
				position: absolute;
				left: 17px;
				top: 74px;
				z-index: 15;
				background-color: #fff;
				ul{
					height: 100%;
					width: 100%;
					li{
						height: 12.5%;
						a{
							display: block;
							height: 100%;
							width: 100%;
							line-height: 30px;
							text-align: left;
							padding-left: 20px;
							color: #666;
							font-size: 12px;
						}
						a:hover{
							background-color: #f6f6f6;
						}
					}
				} 
			}
		}
	}
</style>
