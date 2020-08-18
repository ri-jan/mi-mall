<template>
	<div class="mi-video">
		<Title class="title">
			<template v-slot:title-left>
				<span>视频</span>
			</template>
			<template v-slot:title-right>
				<a href="javascript:void(0)" @click="toAbout" class="title-right">
					<div>查看全部</div>
					<div><span class="icon-jiantou-copy iconfont"></span></div>
				</a>
			</template>
		</Title>
		<div class="video-cards">
			<ul>
				<li v-for="(item,i) in miVideo" :key="i">
					<a title="点击播放视频" @click="open(i)" href="javascript:void(0)">
						<img v-lazy="item.poster" />
						<p>{{item.name}}</p>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Title from '../common/Title.vue'
	import Video from './Video.vue'
	export default {
		name: 'MiVideo',
		components: {
			Title,
			Video
		},
		props: {
			miVideo: {
				type: Array,
				default () {
					return []
				}
			}
		},
		methods: {
			open(i) {
				const h = this.$createElement;
				this.$msgbox({
					title: this.miVideo[i].name,
					message: h(Video, {
						key: i
					}),
					showCancelButton: false,
					showConfirmButton: false,
					data: this.miVideo[i],
					beforeClose: (close, instance, done) => {
						document.querySelector('video').pause();
						done()
					},
				}).then(action => {
					this.$message({
						type: 'info',
						message: 'action: ' + action
					});
				}).catch(e => e);
			},
			toAbout(){
				this.$router.push('/about')
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.mi-video {
		background-color: #F5F5F7;
		width: 100%;

		.title {
			position: relative;

			.title-right {
				width: 92px;
				height: 24px;
				font-weight: 400;
				display: flex;
				text-align: center;
				position: absolute;
				right: 0;
				top: 20px;

				div {
					transition: color 0.5s;
					line-height: 20px;
				}

				div:last-child {
					transition: background-color 0.5s;
					height: 20px;
					width: 20px;
					color: #fff;
					background-color: #b0b0b0;
					border-radius: 50%;
					margin-left: 6px;
				}
			}

			.title-right:hover {
				div:first-child {
					color: #ff6700;
				}

				div:last-child {
					background-color: #ff6700;
				}
			}
		}

		.video-cards {
			width: 1226px;
			margin: 0 auto;
			height: 300px;
			font-size: 14px;
			color: #333;

			ul {
				height: 100%;
				display: flex;
				padding-bottom: 20px;

				li {
					box-sizing: border-box;
					flex: 1;
					padding-left: 14px;

					a {
						display: block;
						height: 100%;
						width: 296px;
						background-color: #fff;
						transition: all 0.5s;

						img {
							width: 100%;
							height: 180px;
						}

						p {
							width: 100%;
							margin-top: 30px;
						}
					}

					a:hover {
						transform: translateY(-5px);
						box-shadow: 0 5px 8px 5px rgba(0, 0, 0, 0.1);
					}
				}

				li:first-child {
					padding-left: 0;
				}
			}
		}
	}
</style>
