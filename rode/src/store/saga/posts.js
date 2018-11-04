import { topics } from '@/api'
import actions from '@/store/actions'
import { take, call, put } from 'redux-saga/effects'

function* getTopics (page, limit) {
  try {
    const data = yield call(topics, { page, limit })
    yield put(actions.postSuccess(data.data))
  } catch (error) {
    yield put(actions.postError())
  }
  yield put(actions.visibleLoading())
}

function* main () {
  while (true) {
    const { page, limit } = yield take(actions.POST_REQUEST)
    yield put(actions.visibleLoading())
    yield call(getTopics, page, limit)
  }
}

export default main