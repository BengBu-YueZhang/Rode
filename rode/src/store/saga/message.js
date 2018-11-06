import actions from '@/store/actions'
import { take, fork, put, call } from 'redux-saga/effects'
import { getMessages } from '@/api'

function* messages (token) {
  try {
    yield put(actions.visibleLoading(true))
    const data = yield call(getMessages, { accesstoken: token })
    yield put(actions.messageSuccess(data))
  } catch (error) {
    yield put(actions.messageError())
  } finally {
    yield put(actions.visibleLoading(false))
  }
}

function* main () {
  while (true) {
    const { token } = yield take(actions.MESSAGE_REQUEST)
    yield fork(messages, token)
  }
}

export default main
