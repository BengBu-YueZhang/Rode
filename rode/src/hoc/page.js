import React, { Component } from 'react'

/**
 * 高阶组件 - 滚动加载
 */
export default function page (Component) {
  return class extends Component {
    constructor (props) {
      super(props)
      this.state = {
        // 是否正在加载数据
        loading: false,
        // 是否加载了全部的数据
        loadedAll: false,
        // 包装组件的dom
        el: React.createRef(),
        // 包装组件的组件
        ref: React.createRef()
      }
    }

    componentDidMount () {
      this.hanldeAddEvent()
    }

    componentWillUnmount () {
      this.handleDeleteEvent()
    }

    hanldeAddEvent = () => {
      this.el.addEventListener('scroll', this.handleLoadMore)
    }

    handleDeleteEvent = () => {
      this.el.removeEventListener('scroll')
    }

    handleLoadMore = () => {
      if (this.loadedAll || this.loading) return
      const height = this.el.offsetHeight
      const scrollTop = this.el.scrollTop
      if (height / scrollTop === 1) this.ref.get()
    }

    handleChangeStatus = (key, value) => {
      this.setState({
        [key]: value
      })
    }

    render () {
      return (
        <Component
          el={el}
          ref={ref}
          onLoadMore={this.handleLoadMore}
          onChangeStatus={this.handleChangeStatus}
        />
      )
    }
  }
}
