import { Map, List } from 'immutable'
import actions from '@/store/actions'

const init = Map({
  has_read_messages: List([]),
  hasnot_read_messages: List([])
})

function message (state = init, action) {
  switch (action.type) {
    case actions.MESSAGE_SUCCESS:
      return state.withMutations(function (state) {
        state.update('has_read_messages', has_read_messages => has_read_messages = List(action.data.has_read_messages))
        .update('hasnot_read_messages', hasnot_read_messages => hasnot_read_messages = List(action.data.hasnot_read_messages))
      })
    case actions.MESSAGE_ERROR:
      return init
    default:
      return state
  }
}

export default message
