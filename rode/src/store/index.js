import { createStore, applyMiddleware } from 'redux'
import reducers from '@/store/reducers'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
  reducers,
  applyMiddleware(
    sagaMiddleware
  )
)

export default store