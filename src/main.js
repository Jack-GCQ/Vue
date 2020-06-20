import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

new Vue({ // 配置对象的属性名都是一些确定的名称 不能随便修改
  el : '#app',
  render: h => h(App),
  axios
})


/*
axios.defaults.baseURL = 'https://cnodejs.org/api/v1/'
axios.defaults.timeout = 5000

// 创建对应axios的实例
const axiosInterface = axios.create({
  baseURL: 'https://cnodejs.org/api/v1/',
  timeout : 5000
})
// 对应实例请求
axiosInterface({
  url : "/topics",
  methods : 'get'
}).then(res => {
  console.log(res)
}).catch(err => {
    console.log(err)
  })


axios.all([
  axios.get('/topics'),
  axios.get('/topics')
]).then(axios.spread((res1, res2) => {
  console.log(res1)
  console.log(res2)
}))
*/

import {request} from './network/request'

request({
  url : '/topics'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
