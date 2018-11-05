import { createSelector } from 'reselect'

export const getVisibleLoading = createSelector(
  [state => state.get('visibleLoading')],
  visibleLoading => visibleLoading
)
