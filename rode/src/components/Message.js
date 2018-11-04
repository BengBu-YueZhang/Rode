import React, { Component } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

class Message extends Component {

  handleClose = () => {
    this.props.onClose()
  }

  render () {
    const { vertical, horizontal, open, message } = this.props
    return (
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={message}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.handleClose}
          >
            <CloseIcon />
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

export default Message
