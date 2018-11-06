import { createSelector } from 'reselect'

export const getLoginStatus = createSelector(
  [state => state.get('login')],
  login => login
)
