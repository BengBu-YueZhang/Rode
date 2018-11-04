import * as visibleLoading from '@/store/actions/visibleLoading'
import * as visibleMessage from '@/store/actions/visibleMessage'
import * as postList from '@/store/actions/postList'

export default {
  ...visibleLoading,
  ...visibleMessage,
  ...postList
}
