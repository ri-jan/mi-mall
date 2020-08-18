<template>
	<div class="advertising">
		<a @click="toDetail(idList[index])" href="javascript:void(0)"><img v-lazy="advertisingImg"/></a>
	</div>
</template>

<script>
	export default{
		name:'Advertising',
		data(){
			return {
				/*商品product_id列表*/
				idList:['1203000022','1202100039','1202200007','1201700009','1193900036','1200900031','9836']
			}
		},
		props:{
			advertisingImg:{
				type:String,
				default:''
			},
			index:{
				type:Number,
				default:0
			}
		},
		methods:{
			toDetail(id){
				this.$router.push('/detail?product_id='+id)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.advertising{
		width: 100%;
		background-color: #f5f5f5;
		padding: 22px 0;
		a{
			display: block;
			margin: 0 auto;
			width: 1226px;
			img{
				height: 120px;
				width: 1226px;
			}
		}
	}
</style>
