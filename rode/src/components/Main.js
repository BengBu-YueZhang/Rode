import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey'

const styles = {
  root: {
    position: 'absolute',
    top: '56px',
    left: 0,
    right: 0,
    bottom: '56px',
    backgroundColor: blueGrey[50],
    overflowX: 'hidden',
    overflowY: 'auto'
  }
}

class Main extends Component {
  render () {
    const { classes } = this.props
    
    return (
      <div className={classes.root}>
      </div>
    )
  }
}

export default withStyles(styles)(Main)