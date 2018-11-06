import { login } from '@/api'
import { take, fork, cancel, put, call } from 'redux-saga/effects'
import actions from '@/store/actions'
import { setLocalStorage, removeLocalStorage } from '@/util/storage'

function* authorize (token) {
  try {
    yield put(actions.visibleLoading(true))
    yield call(login, { accesstoken: token })
    yield put(actions.addMessageQueue('登录成功'))
    yield put(actions.processQueue())
    yield call(setLocalStorage('token', token))
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
    const action = yield take([actions.LOGOUT, actions.LOGIN_ERROR])
    yield call(removeLocalStorage('token'))
    if(action.type === actions.LOGOUT)
      yield cancel(task)
  }
}

export default main