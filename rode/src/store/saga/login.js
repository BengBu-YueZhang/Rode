import { login } from '@/api'
import { take, fork, put, call, select } from 'redux-saga/effects'
import actions from '@/store/actions'
import { setLocalStorage, removeLocalStorage, isHaveStorage } from '@/util/storage'
import { getLoginStatus } from '@/store/selectors/login'

function* authorize (token, callback) {
  try {
    yield put(actions.visibleLoading(true))
    const { loginname } = yield call(login, { accesstoken: token })
    yield put(actions.loginSuccess())
    yield put(actions.addMessageQueue('登录成功'))
    yield put(actions.processQueue())
    yield call(setLocalStorage, 'token', token)
    yield call(setLocalStorage, 'loginname', loginname)
    yield call(callback)
  } catch (error) {
    yield put(actions.loginError())
  } finally {
    yield put(actions.visibleLoading(false))
  }
}

function* main () {
  while (true) {
    // 如果存在token, 则说明已登录, 不需要监听LOGIN_REQUEST
    if (!(yield select(getLoginStatus))) {
      const { token, callback } = yield take(actions.LOGIN_REQUEST)
      yield fork(authorize, token, callback)
    }
    yield take([actions.LOGOUT, actions.LOGIN_ERROR])
    yield call(removeLocalStorage, 'token')
    yield call(removeLocalStorage, 'loginname')
  }
}

export default main