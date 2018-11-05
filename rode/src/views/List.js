import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getPosts, getRefresh, getLoading, getLoadedAll } from '@/store/selectors/posts'
import actions from '@/store/actions'
import ImageIcon from '@material-ui/icons/Image'
import Divider from '@material-ui/core/Divider'
import LoadMore from '@/components/LoadMore'

const styles = {
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
    posts: getPosts(state),
    refresh: getRefresh(state),
    loading: getLoading(state),
    loadedAll: getLoadedAll(state)
  }
}

class PostList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filter: {
        page: 1,
        limit: 20
      }
    }
    this.ref = React.createRef()
  }

  componentDidMount () {
    const { refresh } = this.props
    if (refresh) this.get()
  }

  loadMore = () => {
    this.setState(prevState => {
      return {
        filter: {
          page: prevState.filter.page + 1
        }
      }
    }, () => {
      this.get()
    })
  }

  get = () => {
    const { dispatch } = this.props
    const { page, limit } = this.state.filter
    dispatch(actions.postRefresh())
    dispatch(actions.postRequest(page, limit))
  }

  render () {
    // 如果你不在 render() 中使用某些东西，它就不应该在状态中
    const { classes, posts, loadedAll, loading } = this.props
    return (
      <LoadMore
        childrenRef={this.ref}
        load={this.loadMore}
        loadedAll={loadedAll}
        loading={loading}
      >
        <div ref={this.ref}>
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
      </LoadMore>
    )
  }
}

PostList.propTypes = {
}

PostList.defaultProps = {
}

export default compose(connect(mapStateToProps), withStyles(styles))(PostList)
