export const MESSAGE_REQUEST = 'MESSAGE_REQUEST'
export const MESSAGE_SUCCESS = 'MESSAGE_SUCCESS'
export const MESSAGE_ERROR = 'MESSAGE_ERROR'

export function messageRequest (token) {
  return {
    type: MESSAGE_REQUEST,
    token
  }
}

export function messageSuccess (data) {
  return {
    type: MESSAGE_SUCCESS,
    data
  }
}

export function messageError () {
  return {
    type: MESSAGE_SUCCESS
  }
}
