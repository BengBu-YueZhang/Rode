import { createSelector } from 'reselect'

export const getUserInfo = createSelector(
  [state => state.get('userInfo')],
  userInfo => userInfo
)
