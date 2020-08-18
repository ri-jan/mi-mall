<template>
	<div>
		<video :controls="true" :poster="videoPoster">
			<source :src="videoSrc"></source>
		</video>
	</div>
</template>

<script>
	export default{
		name:'Video',
		props:{
			miVideo:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		computed:{
			videoSrc(){
				return this.$root.data.src
			},
			videoPoster(){
				return this.$root.data.poster
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	video{
		width: 880px;
		height: 495px;
		border: none;
	}
</style>
