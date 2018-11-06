import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import PageviewIcon from '@material-ui/icons/Pageview'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import blueGrey from '@material-ui/core/colors/blueGrey'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

const styles = {
  root: {
    display: 'flex',
    width: '100%',
    minHeight: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '30px 0',
    boxSizing: 'border-box',
    backgroundColor: '#fff'
  },
  name: {
    marginTop: '10px',
    padding: '0 60px'
  },
  signature: {
    marginTop: '5px',
    color: blueGrey[600],
    wordBreak: 'break-all',
    padding: '0 60px'
  },
  list: {
    width: '80%',
    padding: '0, 30px',
    marginTop: '30px'
  }
}

class User extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Avatar>
          <PageviewIcon/>
        </Avatar>
        <Typography variant="h6" className={classes.name}>
          张越
        </Typography>
        <Typography component="p" className={classes.signature}>
          咸鱼
        </Typography>
        <div className={classes.list}>
          <Typography component="p">
            最近创建话题
          </Typography>
          <List component="nav">
            <ListItem button>
              <ListItemText primary="Inbox" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </div>
        <div className={classes.list}>
          <Typography component="p">
            最近参与话题
          </Typography>
          <List component="nav">
            <ListItem button>
              <ListItemText primary="Inbox" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </div>
      </div>
    )
  }
}

export default compose(withStyles(styles))(User)
