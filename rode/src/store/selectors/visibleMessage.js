import { createSelector } from 'reselect'

export const getVisibleMessage = createSelector(
  [state => state.get('visibleMessage')],
  visibleMessage => visibleMessage
)
