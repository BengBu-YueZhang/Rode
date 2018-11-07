import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import { compose } from 'redux'
import { connect } from 'react-redux'
import actions from '@/store/actions'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import { getLocalStorage } from '@/util/storage'

const styles = {
  root: {
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#fff',
    padding: '30px 20px',
    textAlign: 'center',
    boxSizing: 'border-box'
  },
  select: {
    width: '100%'
  },
  multiline: {
    width: '100%'
  },
  title: {
    width: '100%'
  },
  button: {
    width: '100%',
    marginTop: '20px'
  }
}

class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tab: '',
      title: '标题',
      content: '暂不支持Morkdown'
    }
  }

  handleChange = (type, event) => {
    this.setState({
      [type]: event.target.value
    })
  }

  handleClick = () => {
    this.props.dispatch(actions.messageRequest({
      accesstoken: getLocalStorage('token'),
      ...this.state
    }))
  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <TextField
          select
          label="类型"
          value={this.state.tab}
          margin="normal"
          variant="outlined"
          className={classes.select}
          onChange={this.handleChange.bind(this, 'tab')}
        >
          <MenuItem value="ask">
            问答
          </MenuItem>
          <MenuItem value="share">
            分享
          </MenuItem>
          <MenuItem value="job">
            工作
          </MenuItem>
          <MenuItem value="dev">
            测试
          </MenuItem>
        </TextField>
        <TextField
          value={this.state.title}
          margin="normal"
          variant="outlined"
          className={classes.title}
          onChange={this.handleChange.bind(this, 'title')}
        />
        <TextField
          value={this.state.content}
          label="内容"
          multiline
          rows="18"
          margin="normal"
          variant="outlined"
          className={classes.multiline}
          onChange={this.handleChange.bind(this, 'content')}
        />
        <Button onClick={this.handleClick} variant="contained" color="primary" className={classes.button}>
          发表<Icon>send</Icon>
        </Button>
      </div>
    )
  }
}

export default compose(connect(), withStyles(styles))(Editor)
