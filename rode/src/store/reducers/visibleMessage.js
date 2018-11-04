import { Map } from 'immutable'
import actions from '@/store/actions'

const init = Map({
  visible: false,
  message: ''
})

function visibleMessage (state = init, action) {
  switch (action.type) {
    case actions.VISIBLE_MESSAGE:
      return state.set('visible', !state.get('visible'))
    case actions.SET_MESSAGE:
      return state.set('message', action.message)
    default:
      return state
  }
}

export default visibleMessage