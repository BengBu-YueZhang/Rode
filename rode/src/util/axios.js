import axios from 'axios'
import { isHaveStorage, getLocalStorage, clearLocalStorage } from '@/util/storage'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const Axios = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
})

Axios.interceptors.request.use(
  (config) => {
    if (isHaveStorage('token') && config.data) {
      let data = JSON.parse(config.data)
      data.accesstoken = getLocalStorage('token')
      config.data = JSON.stringify(data)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

Axios.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    const errorCode = error.response.status
    const errMessage = error.response.data.message || error.message
    switch (errorCode) {
      case 401:
      case 403:
        clearLocalStorage()
        history.push('/login')
        break
      default:
        break
    }
    return Promise.reject(errMessage)
  }
)

export default Axios
