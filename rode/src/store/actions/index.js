import * as visibleLoading from '@/store/actions/visibleLoading'
import * as visibleMessage from '@/store/actions/visibleMessage'
import * as posts from '@/store/actions/posts'

export default {
  ...visibleLoading,
  ...visibleMessage,
  ...posts
}
