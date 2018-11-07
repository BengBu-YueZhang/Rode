import { take, fork, put, call } from 'redux-saga/effects'
import { addTopics } from '@/api'
import actions from '@/store/actions'

function* publish (data, callback) {
  try {
    yield put(actions.visibleLoading(true))
    yield call(addTopics, data)
    yield put(actions.addMessageQueue('发表成功'))
    yield put(actions.processQueue())
    yield call(callback)
  } catch (error) {
    yield put(actions.addMessageQueue('发表失败'))
    yield put(actions.processQueue())
  } finally {
    yield put(actions.visibleLoading(false))
  }
}

function* main () {
  while (true) {
    const { data, callback } = yield take(actions.EDIT_REQUEST)
    yield fork(publish, data, callback)
  }
}

export default main
