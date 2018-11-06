export const LOGOUT = 'LOGOUT'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_STATUS_QUEUE = 'LOGIN_STATUS_QUEUE'

export function loginSuccess () {
  return {
    type: LOGIN_SUCCESS
  }
}

export function logout () {
  return {
    type: LOGOUT
  }
}

export function loginRequest (token, callback) {
  return {
    type: LOGIN_REQUEST,
    token,
    callback
  }
}

export function loginError () {
  return {
    type: LOGIN_ERROR
  }
}

export function loginStatusQueue () {
  return {
    type: LOGIN_STATUS_QUEUE
  }
}
