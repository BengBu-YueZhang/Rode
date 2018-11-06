import { List, Map } from 'immutable'
import actions from '@/store/actions'

const init = Map({
  list: List([]),
  loadedAll: false,
  loading: false
})

function posts (state = init, action) {
  switch (action.type) {
    case actions.POST_SUCCESS:
      return state.withMutations(function (state) {
        state.set('loading', false)
        .update('list', list => action.more ? list.concat(action.data) : list = List(action.data))
        .update('loadedAll', loadedAll => action.data.length ? loadedAll = false : loadedAll = true)
      })
    case actions.POST_ERROR:
      return state.withMutations(function (state) {
        state.set('loading', false)
        .update('list', list => list.clear())
      })
    case actions.POST_REQUEST:
      return state.set('loading', true)
    default:
      return state
  }
}

export default posts