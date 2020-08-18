<template>
	<div class="cart">
		<CartHeader></CartHeader>
		<div class="main_cart">
			<div class="empty" v-if="$store.state.cartList.length == 0">
				<img src="https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/cart/cart-empty.png" />
				<p>
					<span>您的购物车还是空的~</span>
					<Button class="to_buy" @click.native="toBuy">马上去购物</Button>
				</p>
			</div>
			<div class="cart_info" v-else>
				<CartTable></CartTable>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import CartHeader from '../components/cart/CartHeader.vue'
	import CartTable from '../components/cart/CartTable.vue'
	import Footer from '../components/common/Footer.vue'
	import Button from '../components/common/Button.vue'
	export default{
		name:'Cart',
		components:{
			CartHeader,
			CartTable,
			Button,
			Footer
		},
		methods:{
			toBuy(){
				this.$router.push('/')
			}
		}
		
	}
</script>

<style scoped="scoped" lang="less">
	.cart{
		min-width: 1226px;
		background-color: #f5f5f5;
		.main_cart{
			width: 1226px;
			margin: 0 auto;
			.empty{
				height: 500px;
				font-size: 36px;
				font-weight: 700;
				color: #B0B0B1;
				display: flex;
				position: relative;
				img{
					height: 300px;
					margin: 100px
				}
				p{
					flex: 1;
					line-height: 500px;
					text-align: left;
				}
				.to_buy{
					position: absolute;
					bottom: 150px;
					right: 360px;
				}
			}
		}
	}
</style>
