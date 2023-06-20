import axios from "axios"
import type { AxiosResponse } from "axios"
import { RequestConfig, Result } from "@/types/http"

// axios中设置放置要取消的对象
window.axiosPromiseArr = []

const instance = axios.create({
  //不写baseURL可以对多个进行配置代理，写了只能一个
  baseURL: "",
  timeout: 5000,
})

instance.interceptors.request.use(
  function (config) {
    //发起请求时保存页面所有请求
    config.cancelToken = new axios.CancelToken((cancel) => {
      window.axiosPromiseArr.push({ cancel })
    })
    // 在发送请求之前做些什么,在此可以设置token
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response: AxiosResponse) {
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    if (axios.isCancel(error)) {
      // 为了终结promise链 (实际请求不会走到.catch(rej=>{}),这样就不会触发错误提示之类的)
      return new Promise(() => {})
    } else {
      return Promise.reject(error)
    }
  }
)

const request = function (params: RequestConfig): Promise<Result> {
  return new Promise((reslove, reject) => {
    instance(params)
      .then((res) => {
        reslove(res)
      })
      .catch((error) => {
        reslove(error)
      })
  })
}

export default request
