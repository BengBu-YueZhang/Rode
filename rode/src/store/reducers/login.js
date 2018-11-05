import { Map } from 'immutable'
import actions from '@/store/actions'
import { setLocalStorage, removeLocalStorage } from '@/util/storage'

const init = Map({
  token: ''
})

function login (state = init, action) {
  switch (action.type) {
    case actions.LOGOUT:
    case actions.LOGIN_ERROR:
      removeLocalStorage('token')
      return state.set('token', '')
    case actions.LOGIN_SUCCESS:
      setLocalStorage('token', action.token)
      return state.set('token', action.token)
    default:
      return state
  }
}

export default login
