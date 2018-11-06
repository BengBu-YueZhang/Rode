import actions from '@/store/actions'
import { Map } from 'immutable'
 
function user (state = Map({}), action) {
  switch (action.type) {
    case actions.USER_SUCCESS:
      return Map(action.data)
    case actions.USER_ERROR:
      return Map({})
    default:
      return state
  }
}

export default user
