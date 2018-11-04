import axios from 'axios'
import {
  isHaveStorage, getLocalStorage, removeLocalStorage
} from '@/util/storage'

const Axios = axios.create({
  baseURL: 'https://cnodejs.org/api/v1 ',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
})

Axios.interceptors.request.use()

Axios.interceptors.response.use()

export default Axios
