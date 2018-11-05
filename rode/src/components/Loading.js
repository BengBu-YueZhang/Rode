import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getVisibleLoading } from '@/store/selectors/visibleLoading'

const mapStateToProps = (state) => {
  return {
    visibleLoading: getVisibleLoading(state)
  }
}

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    zIndex: 9999
  }
}

class Loading extends Component {
  render () {
    const { visibleLoading, classes } = this.props
    return (
      visibleLoading && (
        <div className={classes.root}>
          <CircularProgress/>
        </div>
      )
    )
  }
}

export default compose(connect(mapStateToProps), withStyles(styles))(Loading)