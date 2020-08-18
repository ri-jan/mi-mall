import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/base.css'
import './assets/font/iconfont.css'
import './assets/css/element-ui.css'
import 'animate.css/animate.min.css'
import VueLazyload from 'vue-lazyload'


// require('./network/mock/mock.js')

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: require('./assets/img/timg.gif'),
	loading: require('./assets/img/timg.gif'),
	attempt: 1
})


new Vue({
	router,
	store,
	render: h => h(App),
	created() {
		if (sessionStorage.getItem("store")) {
			this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
		}
		window.addEventListener('beforeunload', () => {
			sessionStorage.setItem('store', JSON.stringify(this.$store.state))
		});
	}
}).$mount('#app')

