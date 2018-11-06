import { createSelector } from 'reselect'

export const getMessage = createSelector(
  [state => state.get('message')],
  message => message
)
