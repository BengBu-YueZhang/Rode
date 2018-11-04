import Axios from '@/util/axios'
import api from '@/api/api'

// 收藏帖子
export async function collect (params) {
  try {
    return await Axios.post(api.collect, params)
  } catch (error) {
    throw error
  }
}

// 帖子列表
export async function topics (params) {
  try {
    return await Axios.get(api.topics, { params })
  } catch (error) {
    throw error
  }
}
