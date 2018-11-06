import { topics } from '@/api'
import actions from '@/store/actions'
import { take, call, put, select } from 'redux-saga/effects'
import { getLoading } from '@/store/selectors/posts'

function* getTopics (page, limit, more) {
  try {
    const data = yield call(topics, { page, limit })
    yield put(actions.postSuccess(data.data, more))
  } catch (error) {
    yield put(actions.postError())
  }
}

function* main () {
  const loading = yield select(getLoading)
  // loading作为开关, 避免重复加载
  while (!loading) {
    const { page, limit, more } = yield take(actions.POST_REQUEST)
    yield call(getTopics, page, limit, more)
  }
}

export default main