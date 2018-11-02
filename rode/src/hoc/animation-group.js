import { TransitionGroup } from 'react-transition-group'
import React, { Component } from 'react'

/**
 * 高阶组件 - 动画组
 */
export default function AnimationGroup (Component) {
  return class extends Component {
    render () {
      <TransitionGroup>
        <Component {...this.props} />
      </TransitionGroup>
    }
  }
}
