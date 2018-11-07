import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: '40px'
  }
}

class Detail extends React.Component {
  
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <h1 className={classes.title}>: ( &nbsp; Empty</h1>
      </div>
    )
  }
}

export default compose(withStyles(styles))(Detail)
