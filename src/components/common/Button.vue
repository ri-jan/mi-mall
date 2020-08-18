<template>
	<a class="my-button" href="javascript:void(0)"><slot></slot></a>
</template>

<script>
	export default{
		name:'Button'
	}
</script>

<style scoped="scoped" lang="less">
	.my-button{
		display: inline-block;
		height: 50px;
		width: 200px;
		background-color: #ff6700;
		color: #fff;
		line-height: 50px;
		text-align: center;
		font-size: 18px;
		font-weight: 500;
		vertical-align: middle;
		transition: all 0.3s;
	}
	.my-button:hover{
		background-color: #f25807;
		cursor: pointer;
	}
</style>
