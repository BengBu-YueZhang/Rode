import { List, Map } from 'immutable'
import actions from '@/store/actions'

const init = Map({
  list: List([]),
  loadedAll: false,
  loading: false,
  refresh: true
})

/**
 * 需要重构
 */
function posts (state = init, action) {
  switch (action.type) {
    case actions.POST_SUCCESS:
      return state.withMutations(function (state) {
        state.set('loading', false)
        .update('list', list => list.concat(action.data))
        .set('refresh', false)
        .update('loadedAll', loadedAll => action.data.length ? false : true)
      })
    case actions.POST_ERROR:
      return state.withMutations(function (state) {
        state.set('loading', false)
        .update('list', list => list.clear())
        .set('refresh', true)
      })
    case actions.POST_REFRESH:
      return state.withMutations(function (state) {
        state.set('refresh', true)
      })
    case actions.POST_REQUEST:
      return state.set('loading', true)
    default:
      return state
  }
}

export default posts