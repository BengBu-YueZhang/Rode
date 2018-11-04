import { all } from 'redux-saga/effects'
import posts from '@/store/saga/posts'

export default function* rootSage () {
  yield all([
    posts()
  ])
}
