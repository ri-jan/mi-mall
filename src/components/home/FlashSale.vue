<template>
	<div>
		<Title class="title">
			<template v-slot:title-left>
				<span>小米闪购</span>
			</template>
			<template v-slot:title-right>
				<div class="rightTitle">
					<button @click="prev" type="button" class="iconfont icon-jiantou-copy el-carousel__arrow el-carousel__arrow--left"></button>
					<button @click="next" type="button" class="iconfont icon-jiantou-copy el-carousel__arrow el-carousel__arrow--right"></button>
				</div>
					
			</template>
		</Title>
		
		<div class="flashSale">
			<div class="countDown">
				<div class="sessions">{{currentSession}}:00 场</div>
				<div class="lightning"><span class="iconfont icon-shandian"></span></div>
				<span>距离开始还有</span>
				<div class="counter">
					<div>{{remainingHours}}</div><span class="iconfont icon-maohao"></span>
					<div>{{remainingMinuts}}</div><span class="iconfont icon-maohao"></span>
					<div>{{remainingSecond}}</div>
				</div>
			</div>
			
			<el-carousel class="flashSwiper" :interval="10000" arrow="always" trigger="click" ref="swiper">
				<el-carousel-item v-for="(item,i) in flashSaleList" :key="i">
					<ul class="flashSaleList">
						<li v-for="(item1,index) in item" :key="index">
							<a @click="toDetail(item1.id)" href="javascript:void(0)" :style="{borderTopColor:randomColor(index)}">
								<img v-lazy="item1.image" />
								<div class="item-title">{{item1.title}}</div>
								<div class="item-desc">{{item1.desc}}</div>
								<div class="item-price"><span>{{item1.highprice}}元 </span><span>{{item1.lowprice}}元</span></div>
							</a>
						</li>
					</ul>
				</el-carousel-item>
				
			</el-carousel>
		</div>
	</div>
	
</template>

<script>
	import Title from '../common/Title.vue'
	import {toDoubleDigit} from '../../assets/js/utils.js'
	export default{
		name:'FlashSale',
		computed:{
			/*小于10拼接0*/
			currentSession(){
				return toDoubleDigit(this.getCurrentSession())
			}
		},
		data(){
			return {
				remainingHours:'00',
				remainingMinuts:'00',
				remainingSecond:'00'
			}
		},
		props:{
			flashSaleList:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			Title
		},
		beforeMount() {
			this.getCurrentTime()
			this.getCurrentSession()
		},
		methods:{
			prev(){
				this.$refs.swiper.prev()
			},
			next(){
				this.$refs.swiper.next()
			},
			/*获取当前场次  6点场、12点场、18点场、24点场*/
			getCurrentSession(){
				let time = new Date()
				if(time.getHours() < 6){
					return 6
				}else if(time.getHours() < 12){
					return 12
				}else if(time.getHours() < 18){
					return 18
				}else {
					return 0
				}
			},
			getCurrentTime(){
				setInterval(()=>{
					let time1 = Date.parse(new Date())
					let year = (new Date()).getFullYear()
					let month = toDoubleDigit((new Date()).getMonth() + 1)
					/*当场次为0点时将时间改为后一天*/
					let day = this.currentSession == 0 ? toDoubleDigit((new Date()).getDate() + 1) : toDoubleDigit((new Date()).getDate())
					let timeStr = year + '/' + month + '/' + day + ' ' + this.currentSession +':00:00'
					let time2 = Date.parse(new Date(timeStr))
					this.remainingHours = toDoubleDigit(Math.floor((time2 - time1)/1000/60/60))
					this.remainingMinuts = toDoubleDigit(Math.floor((time2 - time1)/1000/60%60))
					this.remainingSecond = toDoubleDigit((time2 - time1)/1000%60)
				},1000)
			},
			randomColor(i){
				let c = ['red','blue','orange','green']
				return c[i]
			},
			toDetail(id){
				this.$router.push('/detail?product_id='+ id)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">

	.flashSale{
		height: 340px;
		width: 1226px;
		margin: 0 auto;
		display: flex;
		.countDown{
			height: 340px;
			width: 234px;
			background-color: #f1eded;
			border-top: 1px solid #e53935;
			padding: 50px 30px;
			font-size: 15px;
			color: rgba(0,0,0,.54);
			.sessions{
				color: #ef3a3b;
				font-size: 21px;
			}
			.lightning{
				padding: 15px 0;
				color: #ef3a3b;
				.icon-shandian::before{
					font-size: 80px;
				}
			}
			.counter{
				margin-top:30px;
				height: 46px;
				width: 234px;
				transform: translateX(-30px);
				div{
					height: 46px;
					width: 46px;
					display: inline-block;
					background-color: #605751;
					line-height: 46px;
					font-size: 24px;
					color: #fff;
				}
				span{
					width: 16px;
					height: 46px;
					display: inline-block;
					line-height: 46px;
				}
			}
		}
		.el-carousel{
			flex: 1;
			/deep/ .el-carousel__container{
				height: 100%;
				width: 100%;
				.el-carousel__arrow{
					display: none;
				}
			}
			/deep/ .el-carousel__indicators{
				display: none;
			}
		}
		.flashSwiper{
			width: 978px;
			.flashSaleList{
				height: 100%;
				width: 100%;
				display: flex;
				li{
					height: 100%;
					width: 25%;
					padding-left: 14px;
					a{
						display: block;
						height: 100%;
						width: 100%;
						background-color: #fff;
						padding: 40px 22px;
						font-size: 14px;
						font-weight: 400;
						border-top: 1px solid #fff;
						img{
							height: 160px;
							width: 160px;
							margin-bottom: 22px;
						}
						.item-title{
							overflow:hidden;
							white-space:nowrap;
							text-overflow:ellipsis;
						}
						.item-desc{
							height: 60px;
							padding: 10px 20px 12px;
							color: #b0b0b0;
							font-size: 12px;
						}
						.item-price span:nth-child(1){
							color: #ff6700;
						}
						.item-price span:nth-child(2){
							color: #ff6700;
							text-decoration: line-through;
							color: #b0b0b0;
						}
					}
				}
			}
		}
	}
	.title{
		.rightTitle{
			position: relative;
			.el-carousel__arrow{
				width: 36px;
				height: 24px;
				border-radius: 0;
				background-color: #f5f5f5;
				position: absolute;
				border: 1px solid #e0e0e0;
				color: #b0b0b0;
				font-size: 16px;
			}
			.el-carousel__arrow:hover{
				color: #ff6700;
			}
			.el-carousel__arrow--left{
				left: 173px;
				border-left: none;
				transform: rotateZ(180deg);
				top: 28px;
			}
			.el-carousel__arrow--right{
				right: 0;
				top: 40px;
			}
		}
		
	}
</style>
