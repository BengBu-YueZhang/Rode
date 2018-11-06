import { all } from 'redux-saga/effects'
import posts from '@/store/saga/posts'
import login from '@/store/saga/login'
import user from '@/store/saga/user'

export default function* rootSage () {
  yield all([
    login(),
    posts(),
    user()
  ])
}
