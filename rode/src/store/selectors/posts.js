import { createSelector } from 'reselect'

export const getPosts = createSelector(
  [(state) => state.get('posts')],
  (posts) => posts
)
