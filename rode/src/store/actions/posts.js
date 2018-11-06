export const POST_REQUEST = 'POST_REQUEST'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_ERROR = 'POST_ERROR'

export function postRequest (page, limit, more) {
  return {
    type: POST_REQUEST,
    page,
    limit,
    more
  }
}

export function postSuccess (data, more) {
  return {
    type: POST_SUCCESS,
    data,
    more
  }
}

export function postError () {
  return {
    type: POST_ERROR
  }
}
