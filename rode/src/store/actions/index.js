import * as visibleLoading from '@/store/actions/visibleLoading'
import * as visibleMessage from '@/store/actions/visibleMessage'
import * as posts from '@/store/actions/posts'
import * as login from '@/store/actions/login'
import * as user from '@/store/actions/user'
import * as message from '@/store/actions/message'
import * as edit from '@/store/actions/edit'

export default {
  ...visibleLoading,
  ...visibleMessage,
  ...posts,
  ...login,
  ...user,
  ...message,
  ...edit
}
