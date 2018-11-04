import React, { Component } from 'react'
import Message from '@/components/Message'
import Loading from '@/components/Loading'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getVisibleLoading, getVisibleMessage } from '@/store/selectors/main'
import actions from '@/store/actions'

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

class SingleCase extends Component {
  handleClose = () => {
    this.props.onCloseMessage()
  }

  render () {
    const { classes, visibleLoading, message } = this.props
    return (
      <React.Fragment>
        <Message
          open={message.get('visible')}
          message={message.get('message')}
          onClose={this.handleClose}
        />
        { visibleLoading && <Loading/> }
      </React.Fragment>
    )
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(SingleCase)