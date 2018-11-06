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
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <Typography component="p">
            新消息
          </Typography>
          <Typography component="p">
            过往消息
          </Typography>
        </div>
      </div>
    )
  }
}

export default compose(connect(mapStateToProps), withStyles(styles))(Message)
