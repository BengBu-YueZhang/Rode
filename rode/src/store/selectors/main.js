import { createSelector } from 'reselect'

export const getVisibleLoading = createSelector(
  [state => state.get('visibleLoading')],
  visibleLoading => visibleLoading
)

export const getVisibleMessage = createSelector(
  [state => state.get('visibleMessage')],
  visibleMessage => visibleMessage
)
