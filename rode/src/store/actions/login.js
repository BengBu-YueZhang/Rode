export const LOGOUT = 'LOGOUT'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_ERROR = 'LOGIN_ERROR'

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
