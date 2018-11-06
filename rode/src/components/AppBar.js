import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { isHaveStorage } from '@/util/storage'
import { connect } from 'react-redux'
import actions from '@/store/actions'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  }
}

class Bar extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isLogin: isHaveStorage('token')
    }
  }

  handleLoginClick = () => {
    const { history } = this.props
    history.push('/login')
  }

  handleLogoutClick = () => {
    const { dispatch, history } = this.props
    dispatch(actions.logout())
    history.push('/')
  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Rode
            </Typography>
            {
              this.state.isLogin ? (
                <Button
                  color="inherit"
                  onClick={this.handleLogoutClick}
                >注销</Button>
              ) : (
                <Button
                  color="inherit"
                  onClick={this.handleLoginClick}
                >登录</Button>
              )
            }
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default compose(connect(), withRouter, withStyles(styles))(Bar)
