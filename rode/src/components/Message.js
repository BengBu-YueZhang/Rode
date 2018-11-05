import React, { Component } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getVisibleMessage } from '@/store/selectors/visibleMessage'
import actions from '@/store/actions'

const mapStateToProps = (state) => {
  return {
    visibleMessage: getVisibleMessage(state)
  }
}

class Message extends Component {

  handleClose = () => {
    const { dispatch } = this.props
    dispatch(actions.visibleMessage(false))
  }

  handleExited = () => {
    const { dispatch } = this.props
    dispatch(actions.processQueue())
  }

  render () {
    const { vertical, horizontal, visibleMessage } = this.props
    const message = visibleMessage.get('current')
    const visible = visibleMessage.get('visible')
    return (
      <Snackbar
        key={message.get('id')}
        anchorOrigin={{ vertical, horizontal }}
        open={visible}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        autoHideDuration={4000}
        onClose={this.handleClose}
        onExited={this.handleExited}
        message={message.get('message')}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.handleClose}
          >
            <CloseIcon/>
          </IconButton>
        ]}
      />
    )
  }
}

Message.propTypes = {
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
  open: PropTypes.bool,
  message: PropTypes.string,
  onClose: PropTypes.func
}

Message.defaultProps = {
  vertical: 'bottom',
  horizontal: 'center',
  open: false,
  message: 'message',
  onClose: () => {}
}

export default compose(connect(mapStateToProps))(Message)
