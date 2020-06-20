import Vue from 'vue'
import VueRouter from 'vue-router'


const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Home = () => import('../views/home/Home')
const ProFile = () => import('../views/profile/ProFile')

// 安装插件
Vue.use(VueRouter)
// 2.创建路由对象
const routes = [
  {
    path : '/cart',
    component : Cart
  },
  {
    path : '/category',
    component : Category
  },
  {
    path : '/home',
    component : Home
  },
  {
    path : '/profile',
    component : ProFile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router
