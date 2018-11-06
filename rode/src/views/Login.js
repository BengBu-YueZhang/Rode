import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { connect } from 'react-redux'
import actions from '@/store/actions'
import qs from 'qs'
import { getLoginStatus } from '@/store/selectors/login'

const mapStateToProps = (state) => {
  return {
    login: getLoginStatus(state)
  }
}

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

  constructor (props) {
    super(props)
    this.state = {
      token: ''
    }
    this.from = '/'
  }

  componentDidMount () {
    if (this.props.login) {
      this.props.history.push('/')
    }
  }

  handleChange = (e) => {
    this.setState({ token: e.target.value })
  }

  handleClick = () => {
    const query = qs.parse(window.location.hash.split('?')[1])
    const { dispatch, history } = this.props
    if (query && query.from) this.from = query.from
    dispatch(actions.loginRequest(this.state.token, () => {
      history.push(this.from)
    }))
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
          value={this.state.token}
          onChange={this.handleChange}
        />
        <Button
          onClick={this.handleClick}
          variant="contained"
          color="primary"
          className={classes.button}>
          登录
        </Button>
      </div>
    )
  }
}

export default compose(connect(mapStateToProps), withStyles(styles))(Login)
