import React, { Component } from 'react'
import Bar from '@/components/AppBar'
import Navigation from '@/components/Navigation'
import Main from '@/components/Main'
import { HashRouter } from 'react-router-dom'
// import { MuiThemeProvider } from '@material-ui/core/styles'
// import theme from '@/config/theme'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Bar/>
          <Main/>
          <Navigation/>
        </div>
      </HashRouter>
      // <MuiThemeProvider theme={theme}>
      // </MuiThemeProvider>
    )
  }
}

export default App
