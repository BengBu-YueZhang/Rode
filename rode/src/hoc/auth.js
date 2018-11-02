import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default function auth (Component) {
  return class extends Component {
    constructor (props) {
      super(props)
    }

    render () {
      const { token, from, ...args } = this.props

      return (
        token ? (
          <Redirect
            to={{
              pathname: `/login?form=${from}`
            }}
          />
        ) : (
          <Component {...args}/>
        )
      )
    }
  }
}
