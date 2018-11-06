import { login } from '@/api'
import { take, fork, cancel, put, call } from 'redux-saga/effects'
import actions from '@/store/actions'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

function* authorize (token, from) {
  try {
    yield put(actions.visibleLoading(true))
    const result = yield call(login, { accesstoken: token })
    yield put(actions.loginSuccess(token))
    yield put(actions.addMessageQueue('登录成功'))
    yield put(actions.processQueue())
    yield call(history.replace(`/#${from}`))
  } catch (error) {
    yield put(actions.loginError())
  } finally {
    yield put(actions.visibleLoading(false))
  }
}

function* main () {
  while (true) {
    const { token, from } = yield take(actions.LOGIN_REQUEST)
    const task = yield fork(authorize, token, from)
    const action = yield take([actions.LOGOUT, actions.LOGIN_ERROR])
    if(action.type === actions.LOGOUT)
      yield cancel(task)
  }
}

export default main