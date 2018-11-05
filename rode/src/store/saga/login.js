import { login } from '@/api'
import { take, fork, cancel, put } from 'redux-saga/effects'
import actions from '@/store/actions'

function* authorize (token) {
  try {
    yield put(actions.visibleLoading(true))
    yield call(login, { accesstoken: token })
    yield put(actions.loginSuccess(token))
  } catch (error) {
    yield put(actions.loginError())
  } finally {
    yield put(actions.visibleLoading(false))
  }
}

function* main () {
  while (true) {
    const { token } = yield take(actions.LOGIN_REQUEST)
    const task = yield fork(authorize, token)
    yield take(actions.LOGOUT)
    yield cancel(task)
  }
}

export default main