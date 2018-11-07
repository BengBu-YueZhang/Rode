import { Redirect, Switch, Route } from 'react-router-dom'
import React from 'react'
import stroe from '@/store'

class RunRoute extends React.Component {

  isAuth = (config) => {
    if (config && config.meta && !config.meta.requiresAuth) {
      return true
    } else {
      return stroe.getState().get('login')
    }
  }

  render () {
    const { routes } = this.props
    return (
      <Switch>
        {
          routes.map((config, index) => {
            const { path, component: Component } = config
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
                    const isAuth = this.isAuth(config)
                    return (
                      isAuth ? (
                        <Component
                          {...props}
                          routes={config.children}
                        />
                      ) : (
                        <Redirect
                          to={`/login?from=${config.path}`}
                        />
                      )
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