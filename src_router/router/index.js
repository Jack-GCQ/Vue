/**
 * 路由器模块
 */
import Vue  from 'vue'
import VueRouter from 'vue-router'

import Abount from '../views/Abount'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'
import MessageDetail from '../views/MessageDetail'

Vue.use(VueRouter)
// n个路由
const routes = [{
  path : '/abount',
  component : Abount,
  meta : {
    title : '首页'
  }
},
  {
    path : '/home',
    component: Home,
    children : [ //嵌套路由
      {
        path : '/home/news',
        component : News,
        meta : {
          title : '首页'
        }
      },
      {
        path : 'message', // 简化写法
        component : Message,
        children : [
          { // 占位
            path : '/home/message/detail/:id',
            component : MessageDetail
          }
        ]
      },
      {
        path : "",
        redirect : '/home/news'
      }
    ],
    meta : {
      title : '首页'
    }
  },
  { // 默认显示页面
    path : '/',
    redirect : '/abount',
    meta : {
      title : '首页'
    }
  }
]
const router = new VueRouter({
  routes,

})
router.beforeEach((to,form,next) => {
  //从 form跳到to
  document.title = to.matched[0].meta.title
  next()
})
//将router传递到Vue实例
export  default router
