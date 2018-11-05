import uuidv1 from 'uuid/v1'

export const ADD_MESSAGE_QUEUE = 'ADD_MESSAGE_QUEUE'
export const PROCESS_QUEUE = 'PROCESS_QUEUE'
export const VISIBLE_MESSAGE = 'VISIBLE_MESSAGE'

export function visibleMessage (visible) {
  return {
    type: VISIBLE_MESSAGE,
    visible
  }
}

export function addMessageQueue (message) {
  return {
    type: ADD_MESSAGE_QUEUE,
    message,
    id: uuidv1()
  }
}

export function processQueue () {
  return {
    type: PROCESS_QUEUE
  }
}