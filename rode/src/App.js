import React, { Component } from 'react'
import Bar from '@/components/AppBar'
import Navigation from '@/components/Navigation'
import Main from '@/components/Main'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'

class App extends Component {
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
