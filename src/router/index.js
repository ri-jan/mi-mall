import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
	{
	  path: '/cart',
	  name: 'Cart',
	  component: () => import( '../views/Cart.vue')
	},
	{
	  path: '/detail',
	  name: 'Detail',
	  component: () => import( '../views/Detail.vue')
	}
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
