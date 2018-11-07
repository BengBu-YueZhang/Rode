import { take, fork, put, call } from 'redux-saga/effects'
import { addTopics } from '@/api'
import actions from '@/store/actions'

function* publish (data) {
  try {
    yield put(actions.visibleLoading(true))
    console.log(data)
    yield call(addTopics, data)
    yield put(actions.addMessageQueue('发表成功'))
    yield put(actions.processQueue())
  } catch (error) {
    yield put(actions.addMessageQueue('发表失败'))
    yield put(actions.processQueue())
  } finally {
    yield put(actions.visibleLoading(false))
  }
}

function* main () {
  while (true) {
    const { data } = yield take(actions.messageRequest)
    yield fork(publish, data)
  }
}

export default main
