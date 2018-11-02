import React, { Component } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { withStyles } from '@material-ui/core/styles'
import ListIcon from '@material-ui/icons/List'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import MessageIcon from '@material-ui/icons/Message'
import SendIcon from '@material-ui/icons/Send'

const styles = {
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
}

class Navigation extends Component {

  constructor (props) {
    super(props)
    this.state = {
      value: 'recents',
    }
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state
    const { classes } = this.props

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction label="主页" value="recents" icon={<ListIcon/>}/>
        <BottomNavigationAction label="消息" value="favorites" icon={<MessageIcon/>} />
        <BottomNavigationAction label="我的" value="nearby" icon={<AccountCircleIcon/>} />
        <BottomNavigationAction label="发布" value="folder" icon={<SendIcon/>}/>
      </BottomNavigation>
    )
  }
}

export default withStyles(styles)(Navigation)