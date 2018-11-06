import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '@/store/actions'
import { getLoginStatus } from '@/store/selectors/login'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  }
}

const mapStateToProps = (state) => {
  return {
    login: getLoginStatus(state)
  }
}

class Bar extends Component {

  handleLoginClick = () => {
    const { history } = this.props
    history.push('/login')
  }

  handleLogoutClick = () => {
    const { dispatch, history } = this.props
    dispatch(actions.logout())
    history.push('/login')
  }

  render () {
    const { classes, login } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Rode
            </Typography>
            {
              login ? (
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

export default compose(connect(mapStateToProps), withRouter, withStyles(styles))(Bar)
