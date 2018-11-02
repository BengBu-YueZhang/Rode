import React, { Component } from 'react'
import Bar from '@/components/AppBar'
import Navigation from '@/components/Navigation'
import Main from '@/components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bar/>
        <Main/>
        <Navigation/>
      </div>
    )
  }
}

export default App
