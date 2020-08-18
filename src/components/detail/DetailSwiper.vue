<template>
	<div class="detail-swiper">
		<el-carousel :interval="5000" arrow="always" trigger="click">
			<el-carousel-item>
				<img v-lazy="productImg" />
			</el-carousel-item>
			<el-carousel-item>
				<img v-lazy="productImg" />
			</el-carousel-item>
			<el-carousel-item>
				<img v-lazy="productImg" />
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	export default {
		name: 'DetailSwiper',
		props: {
			productImg: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.detail-swiper {
		width: 560px;
		height: 560px;

		/deep/ .el-carousel {
			height: 100%;
			width: 100%;

			.el-carousel__container {
				height: 100%;
				width: 100%;

				img {
					height: 100%;
					width: 100%;
				}
			}

			.el-carousel__indicators {
				transform: translateX(-50%);
				margin: 0 auto;
				left: 50%;

				.el-carousel__button {
					width: 50px;
					height: 3px;
					border-radius: 0;
					border: none;
					background-color: #ccc;
				}
			}

			.el-carousel__indicator.is-active button {
				background-color: #999;
			}

			.el-carousel__arrow {
				border-radius: 0;
			}
		}
	}
</style>
