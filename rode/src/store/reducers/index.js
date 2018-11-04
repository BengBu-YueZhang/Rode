import { Map } from 'immutable'
import visibleLoading from '@/store/reducers/visibleLoading'
import visibleMessage from '@/store/reducers/visibleMessage'
import posts from '@/store/reducers/posts'

function reducer (state = Map({}), action) {
  return Map({
    visibleLoading: visibleLoading(state.get('visibleLoading'), action),
    visibleMessage: visibleMessage(state.get('visibleMessage'), action),
    posts: posts(state.get('posts'), action)
  })
}

export default reducer
