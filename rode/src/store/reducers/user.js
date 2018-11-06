import actions from '@/store/actions'
import { Map, List } from 'immutable'
 
const init = Map({
  recent_topics: List([]),
  recent_replies: List([]),
  avatar_url: '',
  loginname: '',
  score: ''
})

function user (state = init, action) {
  switch (action.type) {
    case actions.USER_SUCCESS:
      return state.withMutations(function (state) {
        state.update('recent_topics', recent_topics => recent_topics = List(action.data.recent_topics))
        .update('recent_replies', recent_replies => recent_replies = List(action.data.recent_replies))
        .set('avatar_url', action.data.avatar_url)
        .set('loginname', action.data.loginname)
        .set('score', action.data.score)
      })
    case actions.USER_ERROR:
      return init
    default:
      return state
  }
}

export default user
