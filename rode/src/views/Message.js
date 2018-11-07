import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import actions from '@/store/actions'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { getLocalStorage } from '@/util/storage'
import blueGrey from '@material-ui/core/colors/blueGrey'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import { getMessage } from '@/store/selectors/message'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    display: 'flex',
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#fff',
    padding: '30px 0',
    boxSizing: 'border-box',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column'
  },
  content: {
    width: '80%'
  },
  title: {
    marginTop: '10px'
  },
  text: {
    fontSize: '14px',
    color: blueGrey[600]
  }
}

const mapStateToProps = (state) => {
  return {
    message: getMessage(state)
  }
}

class Message extends React.Component {

  componentDidMount () {
    this.init()
  }

  init = () => {
    const token = getLocalStorage('token')
    this.props.dispatch(actions.messageRequest(token))
  }

  render () {
    const { classes, message } = this.props
    console.log(message.toJS())
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <Typography variant="h6">
            新消息
          </Typography>
          <List>
            {
              message.get('hasnot_read_messages').size === 0 ? (
                <Typography component="p" className={classes.signature}>
                  暂无消息
                </Typography>
              ) : (
                null
              )
            }
          </List>
          <Divider/>
          <Typography variant="h6" className={classes.title}>
            过往消息
          </Typography>
          <List>
            {
              message.get('has_read_messages').size === 0 ? (
                <Typography component="p" className={classes.signature}>
                  暂无消息
                </Typography>
              ) : (
                message.get('has_read_messages').map(mes => {
                  return (
                    <React.Fragment key={mes.id}>
                      <ListItem button>
                        {
                          mes.type === 'reply' && (
                            <ListItemText
                              primary={
                                <React.Fragment>
                                  <p className={classes.text}>
                                    { 
                                      <Link to={{
                                        pathname: '/user',
                                        search: `?name=${mes.author.loginname}`
                                      }}>{ mes.author.loginname }</Link>
                                    } 回复了您的话题  :
                                  </p>
                                  <p className={classes.text}>
                                    <Link
                                      to={{
                                        pathname: '/detail',
                                        search: `?id=${mes.topic.id}`
                                      }}
                                      className={classes.text}
                                    >{ mes.topic.title }</Link>
                                  </p>
                                </React.Fragment>
                              }
                            />
                          )
                        }
                        {
                          mes.type === 'at' && (
                            <ListItemText
                              primary={
                                <React.Fragment>
                                  <p className={classes.text}>
                                    { 
                                      <Link to={{
                                        pathname: '/user',
                                        search: `?name=${mes.author.loginname}`
                                      }}>{ mes.author.loginname }</Link>
                                    } 在话题  :
                                  </p>
                                  <p className={classes.text}>
                                    <Link
                                      to={{
                                        pathname: '/detail',
                                        search: `?id=${mes.topic.id}`
                                      }}
                                      className={classes.text}
                                    >{ mes.topic.title }</Link> 中@了您
                                  </p>
                                </React.Fragment>
                              }
                            />
                          )
                        }
                      </ListItem>
                      <Divider/>
                    </React.Fragment>
                  )
                })
              )
            }
          </List>
        </div>
      </div>
    )
  }
}

export default compose(connect(mapStateToProps), withStyles(styles))(Message)
