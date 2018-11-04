import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getPosts } from '@/store/selectors/posts'
import actions from '@/store/actions'
import ImageIcon from '@material-ui/icons/Image'
import Divider from '@material-ui/core/Divider'

const styles = {
  root: {
    paddingBottom: '56px'
  },
  list: {
    backgroundColor: '#fff'
  },
  text: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}

const mapStateToProps = (state) => {
  return {
    posts: getPosts(state)
  }
}

class PostList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filter: {
        page: 1,
        limit: 10
      }
    }
  }

  componentDidMount () {
    this.get()
  }

  get = () => {
    const { dispatch } = this.props
    const { page, limit } = this.state.filter
    dispatch(actions.postRequest(page, limit))
  }

  render () {
    const { classes, posts } = this.props
    console.log(posts)
    return (
      <div className={classes.root}>
        <List className={classes.list} >
          {
            posts.size > 0 && posts.map(li => {
              return (
                <React.Fragment key={li.id}>
                  <ListItem>
                    {
                      li.author && li.author.avatar_url ? (
                        <Avatar src={li.author.avatar_url}/>
                      ) : ( <ImageIcon/> )
                    }
                    <ListItemText
                      primary={<p className={classes.text}>{li.title}</p>}
                      secondary={<span>{new Date(li.create_at).toDateString()}</span>}
                    />
                  </ListItem>
                  <Divider/>
                </React.Fragment>
              )
            })
          }
        </List>
      </div>
    )
  }
}

PostList.propTypes = {
}

PostList.defaultProps = {
}

export default compose(connect(mapStateToProps), withStyles(styles))(PostList)
