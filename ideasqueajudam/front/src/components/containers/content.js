import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    margin: '40px 15px',
    [theme.breakpoints.up('sm')] : {
      maxWidth: 960,
      margin: '40px auto'
    }
  }
}))

const Content = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}

export default Content