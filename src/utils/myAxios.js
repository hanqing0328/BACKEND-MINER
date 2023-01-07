import axios from 'axios'


const axiosOption = {
  baseURL: 'https://asteroids.dev.mediasia.cn',
  timeout: 5000,
}

const instance = axios.create(axiosOption)

// request intercept
instance.interceptors.request.use(
  function (config) {
    // axios请求前的逻辑处理
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default instance