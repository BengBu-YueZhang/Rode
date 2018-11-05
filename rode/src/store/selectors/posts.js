import { createSelector } from 'reselect'

export const getPosts = createSelector(
  [state => state.getIn(['posts','list'])],
  posts => posts
)

export const getLoading = createSelector(
  [state => state.getIn(['posts','loading'])],
  loading => loading
)

export const getRefresh = createSelector(
  [state => state.getIn(['posts','refresh'])],
  refresh => refresh
)

export const getLoadedAll = createSelector(
  [state => state.getIn(['posts','loadedAll'])],
  loadedAll => loadedAll
)

