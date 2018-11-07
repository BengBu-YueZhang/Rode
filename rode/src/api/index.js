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

// 登录
export async function login (params) {
  try {
    return await Axios.post(api.login, params)
  } catch (error) {
    throw error
  }
}

// 获取用户详情
export async function getUserDetail (username) {
  try {
    return await Axios.get(`${api.user_detail}${username}`)
  } catch (error) {
    throw error
  }
}

// 获取消息列表
export async function getMessages (params) {
  try {
    return await Axios.get(api.messages, { params })
  } catch (error) {
    throw error
  }
}

// 添加新的帖子
export async function addTopics (params) {
  try {
    return await Axios.post(api.add, params)
  } catch (error) {
    throw error
  }
}