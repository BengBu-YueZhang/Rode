import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey'
import RunRoute from '@/components/RunRoute'
import routers from '@/routers'
import Message from '@/components/Message'
import Loading from '@/components/Loading'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getVisibleLoading, getVisibleMessage } from '@/store/selectors/main'

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

const mapStateToProps = (state) => {
  return {
    visibleLoading: getVisibleLoading(state),
    message: getVisibleMessage(state)
  }
}

class Main extends Component {
  render () {
    const { classes, visibleLoading, message } = this.props
    console.log(this.props)
    return (
      <div className={classes.root}>
        <RunRoute routes={routers}/>
        <Message
          open={message.get('visible')}
          message={message.get('message')}
        />
      { visibleLoading && <Loading/> }
      </div>
    )
  }
}

export default compose(connect(mapStateToProps), withStyles(styles))(Main)
