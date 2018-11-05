import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    paddingTop: '100px'
  },
  textField: {
    width: '80%'
  },
  button: {
    width: '60%',
    marginTop: '20px'
  }
}

class Login extends React.Component {

  handleButtonClick = () => {
  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <TextField
          id="standard-dense"
          label="Access Token"
          margin="dense"
          className={classes.textField}
        />
        <Button
          onClick={this.handleButtonClick}
          variant="contained"
          color="primary"
          className={classes.button}>
          登录
        </Button>
      </div>
    )
  }
}

export default compose(withStyles(styles))(Login)
