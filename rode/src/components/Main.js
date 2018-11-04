import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey'
import RunRoute from '@/components/RunRoute'
import routers from '@/routers'
import Message from '@/components/Message'
import Loading from '@/components/Loading'

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
        <RunRoute routes={routers}/>
      </div>
    )
  }
}

export default withStyles(styles)(Main)