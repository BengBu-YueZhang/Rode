import { Map, List } from 'immutable'
import actions from '@/store/actions'

const init = Map({
  visible: false,
  messages: List([]),
  current: Map({})
})

function visibleMessage (state = init, action) {
  switch (action.type) {
    case actions.ADD_MESSAGE_QUEUE:
      const { id, message } = action
      return state.update('messages', messages => messages.push(Map({id, message})))
    case actions.PROCESS_QUEUE:
      if (state.get('visible')) {
        return state.set('visible', false)
      } else {
        if (state.get('messages').size > 0) {
          return state.withMutations(function (state) {
            state.set('current', state.get('messages').first())
            .update('messages', messages => messages.shift())
            .set('visible', true)
          })
        }
      }
      return state
    case actions.VISIBLE_MESSAGE:
      return state.set('visible', action.visible)
    default:
      return state
  }
}

export default visibleMessage