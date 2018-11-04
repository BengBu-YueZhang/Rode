import { topics } from '@/api'
import actions from '@/store/actions'
import { take, call, put } from 'redux-saga/effects'

function* getTopics (page, limit) {
  try {
    const { data: { data } } = yield call(topics, { page, limit })
    yield put(actions.postSuccess(data))
  } catch (error) {
    yield put(actions.postError())
  }
}

function* main () {
  while (true) {
    const { page, limit } = yield take(actions.POST_REQUEST)
    yield call(getTopics, page, limit)
  }
}

export default main