import React, { Component } from 'react'
import Bar from '@/components/AppBar'
import Navigation from '@/components/Navigation'
import Main from '@/components/Main'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'
import SingleCase from '@/components/SingleCase'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Bar/>
            <Main/>
            <Navigation/>
            <SingleCase/>
          </div>
        </HashRouter>
      </Provider>
    )
  }
}

export default App
