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
import actions from '@/store/actions'

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

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseMessage: () => {
      dispatch(actions.visibleMessage(false))
    }
  }
}

class Main extends Component {
  handleClose = () => {
    this.props.onCloseMessage()
  }

  render () {
    const { classes, visibleLoading, message } = this.props
    return (
      <div className={classes.root}>
        <RunRoute routes={routers}/>
        <Message
          open={message.get('visible')}
          message={message.get('message')}
          onClose={this.handleClose}
        />
      { visibleLoading && <Loading/> }
      </div>
    )
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(styles))(Main)
