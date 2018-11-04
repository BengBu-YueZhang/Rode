import { createStore, applyMiddleware } from 'redux'
import reducers from '@/store/reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '@/store/saga'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
  reducers,
  applyMiddleware(
    sagaMiddleware
  )
)

sagaMiddleware.run(rootSaga)

export default store
