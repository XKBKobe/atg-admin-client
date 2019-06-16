import axios from 'axios'
import {MessageBox, Message} from 'element-ui'
import store from '@/store'
import {Loading} from 'element-ui'
import {getToken} from '@/utils/auth'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000 // request timeout
})

let loadingInstance;

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
   // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    loadingInstance = Loading.service({fullscreen: true})
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    loadingInstance.close()
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    return new Promise((resolve, reject) => {
      const res = response.data
      if (res.respCode && res.respCode !== '100200') {
        if (res.respCode === '101604') {
          store.dispatch('resetToken').then(() => {
            location.reload()
          })
          // setTimeout(() => {
          //   location.href = '/'
          // }, 1000)
          //
        }

        let message = '[' + res.respCode + ']：' + res.respMsg
        Message({
          message: message,
          type: 'warning',
          duration: 3 * 1000
        })
        loadingInstance.close()
      } else {
        loadingInstance.close()
        resolve(res)
      }
    })
  },
  error => {
    loadingInstance.close()
    Message({
      message: '请求失败，请重新尝试',
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
