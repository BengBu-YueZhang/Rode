import actions from '@/store/actions'

function visibleLoading (state = false, action) {
  switch (action.type) {
    case actions.VISIBLE_LOADING:
      return !state
    default:
      return state
  }
}

export default visibleLoading