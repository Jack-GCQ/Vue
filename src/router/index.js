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

export  default new VueRouter({
  // n个路由
  routes : [{
    path : '/abount',
    component : Abount
   },
    {
      path : '/home',
      component: Home,
      children : [
        {
          path : '/home/news',
          component : News
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
      ]
    },
    {
      path : '/',
      redirect : '/abount'
    }
  ]
})
