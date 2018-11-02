import { Redirect, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'

class RunRoute extends Component {
  render () {
    const { routes } = this.props
    return (
      <Switch>
        {
          routes.map((config, index) => {
            const { path, component: Component } = config
            console.log(Component)
            return (
              config.redirect ? (
                <Redirect
                  exact={true}
                  key={index}
                  to={config.redirect}
                  from={path}
                />
              ) : (
                <Route
                  key={index}
                  path={path}
                  render={(props) => {
                    return (
                      <Component
                        {...props}
                        routes={config.children}
                      />
                    )
                  }}
                />
              )
            )
          })
        }
      </Switch>
    )
  }
}

export default RunRoute