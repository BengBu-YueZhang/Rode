import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import hacks from 'viewport-units-buggyfill/viewport-units-buggyfill.hacks'
import ViewportUnitsBuggyfill from 'viewport-units-buggyfill'

ViewportUnitsBuggyfill.init({hacks: hacks})

ReactDOM.render(<App />, document.getElementById('root'))
