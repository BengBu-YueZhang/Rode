import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import BeachAccessIcon from '@material-ui/icons/BeachAccess'
import { compose } from 'redux'

const styles = {
  root: {
    paddingBottom: '56px'
  },
  list: {
    backgroundColor: '#fff'
  }
}

class PostList extends Component {
  render () {
    const { classes, parent } = this.props
    return (
      <div className={classes.root}>
        <List className={classes.list} ref={parent}>
          <ListItem>
            <Avatar>
              <BeachAccessIcon/>
            </Avatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
        </List>
      </div>
    )
  }
}

export default compose(withStyles(styles))(PostList)
