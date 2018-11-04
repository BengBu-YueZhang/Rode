import { Map } from 'immutable'
import visibleLoading from '@/store/reducers/visibleLoading'
import visibleMessage from '@/stroe/reducers/visibleMessage'

function reducer (state = Map({}), action) {
  return Map({
    visibleLoading: visibleLoading,
    visibleMessage: visibleMessage
  })
}

export default reducer
