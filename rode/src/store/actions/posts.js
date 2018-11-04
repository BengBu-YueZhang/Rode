export const POST_REQUEST = 'POST_REQUEST'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_ERROR = 'POST_ERROR'
export const POST_REFRESH = 'POST_REFRESH'

export function postRequest (page, limit) {
  return {
    type: POST_REQUEST,
    page,
    limit
  }
}

export function postSuccess (data) {
  return {
    type: POST_SUCCESS,
    data
  }
}

export function postError () {
  return {
    type: POST_ERROR
  }
}

export function postRefresh () {
  return {
    type: POST_REFRESH
  }
}
