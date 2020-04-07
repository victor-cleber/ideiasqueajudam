import React from 'react'
import Routes, { footerRoutes } from '../routes/routes'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Socials from '../socials/socials'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <AppBar position='static'>
      <Toolbar className={classes.container}>
        <Routes
          routes={footerRoutes}/>
          <Socials />
      </Toolbar>
    </AppBar>
  )
}

export default Footer
