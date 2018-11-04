import { List } from 'immutable'
import actions from '@/store/actions'

function posts (state = List([]), action) {
  switch (action.type) {
    case actions.POST_SUCCESS:
      return state.concat(List(data))
    case actions.POST_ERROR:
      return state.clear()
    case actions.POST_REFRESH:
      return List(action.data)
    default:
      return state
  }
}

export default posts