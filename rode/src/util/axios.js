import axios from 'axios'
import stroe from '@/store'
import actions from '@/store/actions'

const Axios = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
})

Axios.interceptors.request.use(
  (config) => {
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
      // 统一的错误提示
      default:
        stroe.dispatch(actions.addMessageQueue(errMessage))
        stroe.dispatch(actions.processQueue())
        break
    }
    return Promise.reject(error)
  }
)

export default Axios
