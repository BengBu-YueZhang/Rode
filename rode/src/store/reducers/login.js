import actions from '@/store/actions'

function login (state = false, action) {
  switch (action.type) {
    case actions.LOGIN_ERROR:
    case actions.LOGOUT:
      return false
    case actions.LOGIN_SUCCESS:
      return true
    default:
      return state
  }
}

export default login