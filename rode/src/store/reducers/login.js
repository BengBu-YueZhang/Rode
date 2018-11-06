import actions from '@/store/actions'
import { isHaveStorage } from '@/util/storage'

function login (state = false, action) {
  switch (action.type) {
    case actions.LOGIN_ERROR:
    case actions.LOGOUT:
      return false
    case actions.LOGIN_SUCCESS:
      return true
    case actions.LOGIN_STATUS_QUEUE:
      return isHaveStorage('token')
    default:
      return state
  }
}

export default login