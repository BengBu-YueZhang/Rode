import { login } from '@/api'
import { take, fork, put, call, select } from 'redux-saga/effects'
import actions from '@/store/actions'
import { setLocalStorage, removeLocalStorage, isHaveStorage, getLocalStorage } from '@/util/storage'
import { getLoginStatus } from '@/store/selectors/login'

// 登录
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

// 验证登录状态
function* verification () {
  if (
    (yield call(isHaveStorage, 'token')) &&
    (yield call(isHaveStorage, 'loginname'))
  ) {
    yield put(actions.loginSuccess())
  } else {
    yield put(actions.logout())
  }
}

export function* initLogin () {
  while (true) {
    // 如果存在token, 则说明已登录, 不需要监听LOGIN_REQUEST
    if (!(yield call(verification))) {
      const { token, callback } = yield take(actions.LOGIN_REQUEST)
      // 使用非阻塞的fork, authorize, put的LOGOUT, LOGIN_ERROR, 可以被下面的take监听
      yield fork(authorize, token, callback)
    }
    yield take([actions.LOGOUT, actions.LOGIN_ERROR])
    yield call(removeLocalStorage, 'token')
    yield call(removeLocalStorage, 'loginname')
  }
}

export function* verificationLogin () {
  while (true) {
    yield take(actions.LOGIN_STATUS_QUEUE)
    yield call(verification)
  }
}
