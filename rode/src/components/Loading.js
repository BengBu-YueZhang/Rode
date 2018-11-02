import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

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
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <CircularProgress/>
      </div>
    )
  }
}

export default withStyles(styles)(Loading)