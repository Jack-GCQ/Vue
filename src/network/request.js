import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL : "https://cnodejs.org/api/v1/",
    timeout : 5000
  })

  // 2. axios拦截器
  // instance.interceptors.request.use(config => {
  //   console.log(config)
  //   // 1.比如说config数据不符合服务器的需求
  //   // 2.某些网络请求(比如登录带token) 必须携带一些特殊的信息
  //   return config
  // },err => {
  //   console.log(err)
  // })
  // 响应结果
  instance.interceptors.response.use(res => {
    console.log(res.data)
  },err => {

  })

  return instance(config)
}

function test() {

}
