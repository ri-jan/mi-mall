<template>
	<div class="channel">
		<div class="channel-left">
			<table>
				<tr>
					<td><a href="javascript:void(0)" @click="toAbout"><span class="iconfont icon-clock"></span><span>小米秒杀</span></a></td>
					<td><a href="javascript:void(0)" @click="toAbout"><span class="iconfont icon-qiye"></span><span>企业团购</span></a></td>
					<td><a href="javascript:void(0)" @click="toAbout"><span class="iconfont icon-xiaomishangchengFma"></span><span>F码通道</span></a></td>
				</tr>
				<tr>
					<td><a href="javascript:void(0)" @click="toAbout"><span class="iconfont icon-mifenqia-copy"></span><span>米粉卡</span></a></td>
					<td><a href="javascript:void(0)" @click="toAbout"><span class="iconfont icon-zijinliushui"></span><span>以旧换新</span></a></td>
					<td><a href="javascript:void(0)" @click="toAbout"><span class="iconfont icon-huafeichongzhi"></span><span>话费充值</span></a></td>
				</tr>
			</table>
		</div>
		<div class="channel-right">
			<a href="javascript:void(0)" @click="toDetail(10000223)"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c0c05274f2fbb55fbccb89622f798907.jpg?w=632&h=340" /></a>
			<a href="javascript:void(0)" @click="toDetail(10000240)"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b746a4db2e0473cc076a3a4b9bbe0235.jpg?w=632&h=340" /></a>
			<a href="javascript:void(0)" @click="toDetail(1203100001)" ><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340" /></a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Channel',
		methods:{
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
	.channel {
		height: 170px;
		width: 1226px;
		margin: 14px auto 30px;
		display: flex;

		.channel-left {
			height: 100%;
			width: 234px;
			background-color: #5f5750;
			
			table {
				height: 100%;
				width: 100%;

				td {
					a {
						font-size: 14px;
						color: #ccc;
						display: block;
						height: 100%;
						width: 100%;
						display: flex;
						flex-direction: column;
						transition: color 0.3s;

						span:first-child {
							width: 100%;
							padding-top: 15px;
							flex: 3;
							font-size: 25px;
						}

						span:last-child {
							flex: 2;
							padding-bottom: 10px;
						}
					}

					a:hover {
						color: #fff;
					}
				}
			}

		}

		.channel-right {
			flex: 1;
			display: flex;

			a {
				margin-left: 14px;
				flex: 1;
				transition: box-shadow 0.2s;

				img {
					height: 100%;
					width: 100%;
				}
			}

			a:hover {
				box-shadow: 0 15px 15px rgba(0, 0, 0, .1);
			}
		}
	}
</style>
