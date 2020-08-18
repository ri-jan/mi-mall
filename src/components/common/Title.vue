<template>
	<div class="title">
		<div class="left"><slot name="title-left"></slot></div>
		<div class="center"></div>
		<div class="right"><slot name="title-right"></slot></div>
	</div>
</template>

<script>
	export default{
		name:'Title'
	}
</script>

<style scoped="scoped" lang="less">
	.title{
		height: 60px;
		width: 1226px;
		display: flex;
		margin: 0 auto;
		line-height: 60px;
		font-weight: 100;
		color: #000;
			.left{
				flex:1;
				color: #333;
				text-align: left;
				font-size: 24px;
			}
			.center{
				flex:3;
			}
			.right{
				flex:1;
				text-align: right;
				font-size: 16px;
			}
	}
</style>
