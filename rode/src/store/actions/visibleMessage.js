export const VISIBLE_MESSAGE = 'VISIBLE_MESSAGE'
export const SET_MESSAGE = 'SET_MESSAGE'

export function visibleMessage (visible) {
  return {
    type: VISIBLE_MESSAGE,
    visible
  }
}

export function setMessage (message) {
  return {
    type: SET_MESSAGE,
    message
  }
}
