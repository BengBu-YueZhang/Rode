import { topics } from '@/api'
import actions from '@/store/actions'
import { take, call, put, select } from 'redux-saga/effects'
import { getLoading } from '@/store/selectors/posts'

function* getTopics (page, limit) {
  try {
    const data = yield call(topics, { page, limit })
    yield put(actions.postSuccess(data.data))
  } catch (error) {
    yield put(actions.postError())
  }
  yield put(actions.visibleLoading(false))
}

function* main () {
  const loading = yield select(getLoading)
  // loading作为开关, 避免重复加载
  while (!loading) {
    const { page, limit } = yield take(actions.POST_REQUEST)
    yield put(actions.visibleLoading(true))
    yield call(getTopics, page, limit)
  }
}

export default main