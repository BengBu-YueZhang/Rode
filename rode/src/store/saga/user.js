import { getUserDetail } from '@/api'
import actions from '@/store/actions'
import { take, put, call } from 'redux-saga/effects'

function* detail (name) {
  try {
    yield put(actions.visibleLoading(true))
    const { data: { data } } = yield call(getUserDetail, name)
    yield put(actions.userSuccess(), data)
  } catch (error) {
    yield put(actions.userError())
  } finally {
    yield put(actions.visibleLoading(false))
  }
}

function* main () {
  while (true) {
    const { name } = yield take(actions.USER_ERROR)
    yield call(detail, name)
  }
}

export default main
