import { Map } from 'immutable'
import actions from '@/store/actions'

const init = Map({})

function message (state = init, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default message
