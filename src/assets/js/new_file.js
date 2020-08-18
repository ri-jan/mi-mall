href="javascript:void(0)"
 
@click="toHome"

@click="toAbout"

@click="toDetail()"

methods:{
			toHome(){
				this.$router.push('/',()=>{
					location.reload()
				})
			}
		}
		
		methods:{
			toAbout(){
				this.$router.push('/about',()=>{
					location.reload()
				})
			}
		}
		
		
		toDetail(id){
			this.$router.push('/detail?product_id='+id,()=>{
					location.reload()
				})
		}