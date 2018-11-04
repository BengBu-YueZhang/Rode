export const VISIBLE_LOADING = 'VISIBLE_LOADING'

export function visibleLoading (visible) {
  return {
    type: VISIBLE_LOADING,
    visible
  }
}
