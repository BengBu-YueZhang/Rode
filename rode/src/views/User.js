import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import blueGrey from '@material-ui/core/colors/blueGrey'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import actions from '@/store/actions'
import { getUserInfo } from '@/store/selectors/user'
import { getLocalStorage } from '@/util/storage'
import qs from 'qs'

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
    marginTop: '30px'
  },
  text: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: getUserInfo(state)
  }
}

class User extends React.Component {

  componentDidMount () {
    this.init()
  }

  init = () => {
    let name = ''
    console.log()
    if (this.props.location.search) {
      name = qs.parse(this.props.location.search.split('?')[1]).name
    } else {
      name = getLocalStorage('loginname')
    }
    this.props.dispatch(actions.userRequest(name))
  }

  render () {
    const { classes, userInfo } = this.props
    return (
      <div className={classes.root}>
        <Avatar src={userInfo.get('avatar_url')}/>
        <Typography variant="h6" className={classes.name}>
          { userInfo.get('loginname') }
        </Typography>
        <Typography component="p" className={classes.signature}>
          积分: { userInfo.get('score') }
        </Typography>
        <div className={classes.list}>
          <Typography component="p">
            最近创建话题
          </Typography>
          <List>
            {
              userInfo.get('recent_topics') && userInfo.get('recent_topics').size && userInfo.get('recent_topics').map(topic => {
                return (
                  <React.Fragment key={topic.id}>
                    <ListItem button>
                      <ListItemText primary={
                        <p className={classes.text}>{topic.title}</p>
                      } />
                    </ListItem>
                    <Divider/>
                  </React.Fragment>
                )
              })
            }
          </List>
        </div>
        <div className={classes.list}>
          <Typography component="p">
            最近参与话题
          </Typography>
          <List>
            {
              userInfo.get('recent_replies') && userInfo.get('recent_replies').size && userInfo.get('recent_replies').map(replies => {
                return (
                  <React.Fragment key={replies.id}>
                    <ListItem button>
                      <ListItemText className={classes.text} 
                        primary={
                          <p className={classes.text}>{replies.title}</p>
                        }
                      />
                    </ListItem>
                    <Divider/>
                  </React.Fragment>
                )
              })
            }
          </List>
        </div>
      </div>
    )
  }
}

export default compose(connect(mapStateToProps), withStyles(styles))(User)
