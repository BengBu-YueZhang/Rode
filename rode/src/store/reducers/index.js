import { Map } from 'immutable'
import visibleLoading from '@/store/reducers/visibleLoading'
import visibleMessage from '@/store/reducers/visibleMessage'
import posts from '@/store/reducers/posts'
import login from '@/store/reducers/login'

function reducer (state = Map({}), action) {
  return Map({
    visibleLoading: visibleLoading(state.get('visibleLoading'), action),
    visibleMessage: visibleMessage(state.get('visibleMessage'), action),
    posts: posts(state.get('posts'), action),
    login: login(state.get('login'), action)
  })
}

export default reducer
