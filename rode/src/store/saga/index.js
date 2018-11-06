import { all } from 'redux-saga/effects'
import posts from '@/store/saga/posts'
import { initLogin, verificationLogin } from '@/store/saga/login'
import user from '@/store/saga/user'

export default function* rootSage () {
  yield all([
    initLogin(),
    verificationLogin(),
    posts(),
    user()
  ])
}
