<template>
  <div>
		<img src="../assets/img/404.3ec06ef.jpg" />
    <h1>不好意思，该页面还没有完成哦~</h1>
		<a href="javascript:void(0)" @click="toHome">点击我返回首页吧~</a>
  </div>
</template>

<script>
	export default{
		name:'About',
		methods:{
			toHome(){
				this.$router.push('/')
			}
		}
		
	}
</script>

<style scoped="scoped">
	img{
		width: 376px;
		height: 322px;
		margin: 50px auto;
	}
	a:hover{
		color: #ff6700;
	}
</style>
