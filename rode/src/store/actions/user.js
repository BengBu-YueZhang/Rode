export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_ERROR = 'USER_ERROR'

export function userRequest (name) {
  return {
    type: USER_REQUEST,
    name
  }
}

export function userSuccess (data) {
  return {
    type: USER_SUCCESS,
    data
  }
}

export function userError () {
  return {
    type: USER_ERROR
  }
}
