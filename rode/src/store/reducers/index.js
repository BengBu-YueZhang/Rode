import { Map } from 'immutable'
import visibleLoading from '@/store/reducers/visibleLoading'
import visibleMessage from '@/store/reducers/visibleMessage'
import posts from '@/store/reducers/posts'
import login from '@/store/reducers/login'
import user from '@/store/reducers/user'

function reducer (state = Map({}), action) {
  return Map({
    visibleLoading: visibleLoading(state.get('visibleLoading'), action),
    visibleMessage: visibleMessage(state.get('visibleMessage'), action),
    posts: posts(state.get('posts'), action),
    login: login(state.get('login'), action),
    userInfo: user(state.get('userInfo'), action)
  })
}

export default reducer
