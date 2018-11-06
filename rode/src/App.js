import React, { Component } from 'react'
import Bar from '@/components/AppBar'
import Navigation from '@/components/Navigation'
import Main from '@/components/Main'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'
import actions from '@/store/actions'

class App extends Component {

  constructor (props) {
    super(props)
    // 查询登录状态, 判断是否需要重新登录
    store.dispatch(actions.loginStatusQueue())
  }

  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Bar/>
            <Main/>
            <Navigation/>
          </div>
        </HashRouter>
      </Provider>
    )
  }
}

export default App
