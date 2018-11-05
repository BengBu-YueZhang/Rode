import axios from 'axios'
import { isHaveStorage, getLocalStorage, removeLocalStorage } from '@/util/storage'
import { createBrowserHistory } from 'history'
import stroe from '@/store'
import actions from '@/store/actions'

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
    const errMessage = error.response.data.error_msg || error.message
    switch (errorCode) {
      default:
        stroe.dispatch(actions.addMessageQueue(errMessage))
        stroe.dispatch(actions.processQueue())
        break
    }
    return Promise.reject(errMessage)
  }
)

export default Axios
