<template>
	<div>
		<table>
			<thead>
				<tr>
					<td><span class="el-icon-check" :class="{'icon-checked':isChecked}" @click="selectedAll"></span>全选</td>
					<td>商品名称</td>
					<td>单价</td>
					<td>数量</td>
					<td>小计</td>
					<td>操作</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,i) in $store.state.cartList" :key="i">
					<td><span class="el-icon-check" :class="{'icon-checked':item.selected}" @click="selectedProduct(item)"></span></td>
					<td><img class="product_image" :src="item.image"/>{{item.name}}({{item.color}})<span v-if="item.serviceName">+{{item.serviceName}}</span></td>
					<td>{{item.totalPrice}}元</td>
					<td>
						<el-input-number v-model="item.count" @change="handleChange" :min="1" :max="20" size="small"></el-input-number>
						<span class="counter">还可购买{{20-item.count}}件</span>
					</td>
					<td>{{item.totalPrice*item.count}}元</td>
					<td><span class="delete" @click="deleteProduct(i)">×</span></td>
				</tr>
			</tbody>
		</table>
		<div class="total">
			<a href="/" class="continue-buy">继续购物</a>
			<span class="final-count">共<i>{{$store.state.cartList.length}}</i>件商品，已选择<i>{{selectedList.length}}</i>件</span>
			<span class="final-price">合计：<i class="i-price">{{$store.state.totalPrice}}</i>元</span>
			<Button class="button" @click.native="toPay">去结算</Button>
		</div>
	</div>
</template>

<script>
	import Button from '../common/Button.vue'
	export default {
		name: 'CartTable',
		components:{
			Button
		},
		computed:{
			selectedList(){
				return this.$store.state.cartList.filter(i=>i.selected == true)
			},
			isChecked(){
					return this.selectedList.length == this.$store.state.cartList.length
			}
		},
		methods: {
			handleChange(value) {
				this.$store.commit('getTotalPrice')
			},
			selectedProduct(item){
				item.selected = !item.selected
				this.$store.commit('getTotalPrice')
			},
			selectedAll(){
				this.$store.commit('selectedAll')
				this.$store.commit('getTotalPrice')
			},
			deleteProduct(index){
				this.$store.commit('productRemove',index)
				this.$store.commit('getTotalPrice')
			},
			toPay(){
				this.$router.replace('/about')
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	table {
		width: 100%;
		height: 100%;
		background-color: #fff;
		margin-top: 30px;
		.el-icon-check {
			border: 1px solid #ddd;
			margin-right: 10px;
			padding: 3px;
			color: #fff;
			font-weight: 700;
		}

		.el-icon-check:hover {
			color: #757575;
		}
		.icon-checked{
			background-color: #ff6700;
			color: #fff;
		}
		.icon-checked:hover{
			color: #fff;
		}
		.counter{
			position: absolute;
			bottom: 15px;
			font-size: 12px;
			color: #757575;
			left:65px;
		}
		tr {
			display: flex;

			td {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 120px;
				position: relative;
			}

			td:nth-child(4) {
				width: 200px;
			}

			td:nth-child(2) {
				flex: 1;
				span{
					font-size: 14px;
					color: #757575;
				}
			}
		}

		thead tr td {
			height: 70px;
		}

		tbody tr {
			height: 120px;
			border-top: 1px solid #ddd;
			td {
				.product_image{
					width: 80px;
					height: 80px;
					margin-right: 15px;
				}
				.delete{
					font-size: 24px;
					color: #757575;
					display: block;
					width: 24px;
					height: 24px;
					line-height: 24px;
					border-radius: 50%;
					transition: all 0.3s;
				}
				.delete:hover{
					background-color: #e53935;
					color: #fff;
				}
			}
			td:nth-child(5){
				color: #ff6700;
			}
			
		}
	}
	.total{
		margin: 14px 0 30px;
		height: 50px;
		background-color: #fff;
		text-align: left;
		position: relative;
		padding-left: 20px;
		line-height: 50px;
		.continue-buy{
			padding: 0 19px;
		}
		.continue-buy:hover{
			color: #ff6700;
		}
		span{
			padding: 0 30px;
		}
		.final-count{
			border-left: 1px solid #ddd;
		}
		.button{
			position: absolute;
			right: 0;
		}
		.final-price{
			position: absolute;
			right: 200px;
			color: #ff6700;
		}
		i{
			color: #ff6700;
		}
		.i-price{
			font-size: 26px;
		}
	}
</style>
