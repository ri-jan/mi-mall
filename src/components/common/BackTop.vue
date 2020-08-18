<template>
	<div class="back-top" @click="backTop" ref="backTop" v-show="isShow">
		<a href="javascript: void(0);"><span class="iconfont icon-huidaodingbu"></span>回到顶部</a>
	</div>
</template>

<script>
	export default {
		name: 'BackTop',
		data() {
			return {
				isShow: false
			}
		},
		mounted() {
			window.addEventListener('scroll', this.scroll)
		},
		destroyed() {
			window.removeEventListener('scroll', this.scroll)
		},
		methods: {
			backTop() {
				document.documentElement.scrollTop = 0
			},
			scroll() {
				let scrollTop = document.documentElement.scrollTop
				if (scrollTop > 1000) {
					this.isShow = true
				} else {
					this.isShow = false
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.back-top {
		height: 90px;
		width: 80px;
		border: 1px solid #f5f5f5;
		background-color: #fff;
		position: fixed;
		right: 0;
		top: 550px;
		z-index: 2005;

		a {
			display: block;
			height: 100%;
			width: 100%;
			font-size: 16px;
			color: #757575;
			padding-top: 15px;

			span {
				display: block;
				font-size: 30px;
			}
		}
		a:hover {
			color: #ff6700;
			animation: pulse;
			animation-duration: 0.5s;
			}
	}
</style>
