export const EDIT_REQUEST = 'EDIT_REQUEST'

export function editRequest (data, callback) {
  return {
    type: EDIT_REQUEST,
    data,
    callback
  }
}
