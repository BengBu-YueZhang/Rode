import { login } from '@/api'
import { take, fork, cancel, put, call } from 'redux-saga/effects'
import actions from '@/store/actions'

function* authorize (token) {
  try {
    yield put(actions.visibleLoading(true))
    const result = yield call(login, { accesstoken: token })
    yield put(actions.loginSuccess(token))
    yield put(actions.addMessageQueue('登录成功'))
    yield put(actions.processQueue(token))
  } catch (error) {
    yield put(actions.loginError())
  } finally {
    yield put(actions.visibleLoading(false))
  }
}

function* main () {
  while (true) {
    const { token } = yield take(actions.LOGIN_REQUEST)
    console.log(token)
    const task = yield fork(authorize, token)
    const action = yield take([actions.LOGOUT, actions.LOGIN_ERROR])
    if(action.type === actions.LOGOUT)
      yield cancel(task)
  }
}

export default main