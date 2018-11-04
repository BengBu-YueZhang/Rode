import React, { Component } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import PropTypes from 'prop-types'

class Message extends Component {

  handleClose = () => {
    this.onClose()
  }

  render () {
    const { vertical, horizontal, open, message } = this.props
    return (
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={this.handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={message}
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
  vertical: 'top',
  horizontal: 'center',
  open: false,
  message: 'message',
  onClose: () => {}
}

export default Message
