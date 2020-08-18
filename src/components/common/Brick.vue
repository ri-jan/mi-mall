<template>
	<div class="brick">
		<Title class="title">
			<template v-slot:title-left>
				<span>{{brickTitle}}</span>
			</template>
			<template v-slot:title-right>
				<a @click="toAbout" class="title-right" v-if="!isShowMore" href="javascript:void(0)">
					<div>查看全部</div>
					<div><span class="icon-jiantou-copy iconfont"></span></div>
				</a>
				<div v-else class="brick-item-category">
					<span v-for="(item,i) in brickItemCategory" :class="{'category-checked':currentIndex == i}" @mouseenter="categoryChecked(i)">{{item}}</span>
				</div>
			</template>
		</Title>
		<div class="brick-item">
			<div class="brick-item-left">
				<a @click="toDetail(idList[index][0])" v-if="showBig" href="javascript:void(0)"><img class="brickLeftImg-big" v-lazy="brickLeftImg[0]"/></a>
				<div v-else class="brickLeftImg-small">
					<a @click="toDetail(idList[index][0])" href="javascript:void(0)"><img v-lazy="brickLeftImg[0]"/></a>
					<a @click="toDetail(idList[index][1])" href="javascript:void(0)"><img v-lazy="brickLeftImg[1]"/></a>
				</div>
			</div>
			<div class="brick-item-right" :class="{'show-more':isShowMore}">
				<ul>
					<li v-for="(item,i) in itemList[currentIndex]" :key="i">
						<a @click="toDetail(item.product_id)" href="javascript:void(0)">
							<img v-lazy="item.image" />
							<div class="goods-name">{{item.name}}</div>
							<div class="goods-desc">{{item.desc}}</div>
							<div class="goods-price">
								<span>{{item.lowprice}}元 </span>
								<span v-show="item.highprice">{{item.highprice}}元</span>
							</div>
						</a>
					</li>
				</ul>
				<!-- 当传入isShowMore的值为true或不传值时展示“查看更多”小卡片，并将最后一件商品卡片缩小 -->
				<div class="show-more-icon">
					<a @click="toAbout" href="javascript:void(0)">
						<div>
							<span>浏览更多</span>{{brickItemCategory[currentIndex]}}
						</div>
						<div><span class="iconfont icon-rightjiantou"></span></div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Title from './Title.vue'
	export default{
		name:'Brick',
		data(){
			return {
				currentIndex:0,
				/*商品product_id列表*/
				idList:[['1193900013'],['1202100042','1201300025'],['1201300014','9285'],['2774','11191'],['1184300036','8881'],['10936','1200900031']]
			}
		},
		components:{
			Title
		},
		computed:{
			/*判断显示一张大图还是两张小图*/
			showBig(){
				return this.brickLeftImg.length == 1
			}
		},
		props:{
			brickTitle:{
				type:String,
				default:''
			},
			brickLeftImg:{
				type:Array,
				default(){
					return []
				}
			},
			itemList:{
				type:Array,
				default(){
					return []
				}
			},
			isShowMore:{
				type:Boolean,
				default:true
			},
			brickItemCategory:{
				type:Array,
				default(){
					return []
				}
			},
			index:{
				type:Number,
				default:0
			}
		},
		methods:{
			/*鼠标经过标题时添加category-checked类名，变色加底边框*/
			categoryChecked(i){
				this.currentIndex = i
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

<style scoped="scoped" lang="less">
	.brick{
		height: 674px;
		background-color: #f5f5f5;
		.title{
			position: relative;
			.brick-item-category{
				span{
					margin-left: 15px;
					padding-bottom: 2px;
					cursor: pointer;
				}
				.category-checked{
					color: #ff6700;
					border-bottom: 2px solid #ff6700;
				}
			}
			.title-right{
				width: 92px;
				height: 24px;
				font-weight: 400;
				display: flex;
				text-align: center;
				position: absolute;
				right: 0;
				top:20px;
				div{
					transition: color 0.5s;
					line-height: 20px;
				}
				div:last-child{
					transition: background-color 0.5s;
					height: 20px;
					width: 20px;
					color: #fff;
					background-color: #b0b0b0;
					border-radius: 50%;
					margin-left: 6px;
				}
			}
			.title-right:hover{
				div:first-child{
					color: #ff6700;	
				}
				div:last-child{
					background-color: #ff6700;
				}
			}
		}
		.brick-item{
			height: 614px;
			width: 1226px;
			margin: 0 auto;
			position: relative;
			.brick-item-left{
				width: 234px;
				height: 100%;
				.brickLeftImg-big{
					height: 100%;
					width: 100%;
					transition: all 0.5s;
				}
				.brickLeftImg-big:hover{
					transform: translateY(-5px);
					box-shadow: 0 5px 8px 5px rgba(0,0,0,0.1);
				}
				.brickLeftImg-small{
					a{
						display: block;
						height: 293px;
						transition: all 0.5s;
						img{
							width: 234px;
							height: 100%;
						}
					}
					a:last-child{
						margin-top: 14px;
						height: 307px;
						img{
							height: 100%;
						}
					}
					a:hover{
						transform: translateY(-5px);
						box-shadow: 0 5px 8px 5px rgba(0,0,0,0.1);
					}
				}
			}
			.brick-item-right{
				position: absolute;
				top: 0;
				right: 0;
				height: 100%;
				width: 992px;
				ul{
					height: 100%;
					width: 100%;
					li{
						width: 25%;
						height: 50%;
						float: left;
						padding-left: 14px;
						a{
							display: block;
							height: 100%;
							background-color: #fff;
							transition: all 0.5s;
							padding: 20px;
							font-size: 14px;
							font-weight: 400;
							img{
								width: 160px;
								height: 160px;
							}
							.goods-name{
								margin-top: 10px;
								height: 32px;
							}
							.goods-desc{
								overflow:hidden;
								white-space:nowrap;
								text-overflow:ellipsis;
								color: #b0b0b0;
								font-size: 12px;
							}
							.goods-price{
								padding-top: 15px;
								color: #ff6700;
								span:last-child{
									color: #b0b0b0;
									text-decoration: line-through;
								}
							}
						}
						a:hover{
							transform: translateY(-5px);
							box-shadow: 0 5px 8px 5px rgba(0,0,0,0.1);
						}
					}
					li:nth-child(-n+4){
							padding-bottom: 14px;
						}
					}
					
			.show-more-icon{
				display: none;
			}
			}
		}
	}
	/*展示显示更多，最后一件商品信息卡片缩小一半*/
	.brick .brick-item .show-more{
		ul li:last-child{
			height: 25%;
			padding-bottom: 7px;
			a{
				padding-top: 30px;
				img{
					width: 80px;
					height: 80px;
					flex-direction: column;
					transform: translateX(60px);
				}
				.goods-name{
					width: 100px;
					transform: translateY(-85px);
					flex: 1;
					margin-left: 10px;
				}
				.goods-desc{
					display: none;
				}
				.goods-price{
					width: 100px;
					transform: translateY(-85px);
					margin-left: 10px;
				}
			}
			
		}
		.show-more-icon{
			display: block;
			height: 25%;
			width: 234px;
			position: absolute;
			right: 0;
			bottom: 0;
			padding-top: 7px;
			a{
				display: block;
				width: 100%;
				background-color: #fff;
				height: 100%;
				transition: all 0.5s;
				display: flex;
				div:first-child{
					flex: 3;
					font-size: 12px;
					color: #757575;
					line-height: 140px;
					text-align: left;
					padding-left: 30px;
					span:first-child{
						display: block;
						height: 20px;
						font-size: 18px;
						color: #333;
					}
				}
				div:last-child{
					flex: 2;
					color: #ff6700;
					line-height: 160px;
					padding-right: 30px;
					.icon-rightjiantou::before{
						font-size: 60px;
						font-weight: 500;
					}
				}
			}
			a:hover{
				transform: translateY(-5px);
				box-shadow: 0 5px 8px 5px rgba(0,0,0,0.1);
			}
		}
	}
</style>
