import * as visibleLoading from '@/store/actions/visibleLoading'
import * as visibleMessage from '@/store/actions/visibleMessage'
import * as posts from '@/store/actions/posts'
import * as login from '@/store/actions/login'
import * as user from '@/store/actions/user'

export default {
  ...visibleLoading,
  ...visibleMessage,
  ...posts,
  ...login,
  ...user
}
