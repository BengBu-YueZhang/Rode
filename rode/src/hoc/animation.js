import { CSSTransition } from 'react-transition-group'
import React, { Component } from 'react'

/**
 * 高阶组件 - 动画
 */
export default function Animation (Components) {
  return class extends Component {
    render () {
      const { timeout, name, status, ...arg }  = this.props
      return (
        <CSSTransition
          in={status}
          timeout={timeout}
          classNames={name}
        >
          <Component
            {...arg}
          />
        </CSSTransition>
      )
    }
  } 
}
