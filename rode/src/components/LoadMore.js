import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types'

const styles = {
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto'
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '60px'
  }
}

class LoadMore extends React.Component {
  constructor (props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount () {
    this.hanldeAddEvent()
  }

  componentWillUnmount () {
    this.handleDeleteEvent()
  }

  hanldeAddEvent = () => {
    this.ref.current.addEventListener('scroll', this.handleLoadMore)
  }

  handleDeleteEvent = () => {
    this.ref.current.removeEventListener('scroll')
  }

  handleLoadMore = () => {
    if (this.props.loadedAll || this.props.loading) return
    const height = this.ref.current.offsetHeight
    const scrollTop = this.ref.current.scrollTop
    if (height + scrollTop === this.props.childrenRef.current.offsetHeight) {
      this.props.load()
    }
  }

  render () {
    const { classes, loading } = this.props
    return (
      <div ref={this.ref} className={classes.root}>
        {
          this.props.children
        }
        {
          loading && (
            <div className={classes.loading}>
              <CircularProgress size={24}/>
            </div>
          )
        }
      </div>
    )
  }
}

LoadMore.propTypes = {
  loadedAll: PropTypes.bool,
  loading: PropTypes.bool,
  load: PropTypes.func,
  childrenRef: PropTypes.shape({
    current: PropTypes.object
  }).isRequired
}

LoadMore.defaultProps = {
  loadedAll: false,
  loading: false,
  load: () => {}
}

export default compose(withStyles(styles))(LoadMore)
