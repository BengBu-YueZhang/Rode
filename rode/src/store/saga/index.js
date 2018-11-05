import { all } from 'redux-saga/effects'
import posts from '@/store/saga/posts'
import login from '@/store/saga/login'

export default function* rootSage () {
  yield all([
    login(),
    posts()
  ])
}
