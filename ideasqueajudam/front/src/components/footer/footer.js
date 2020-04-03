import React from 'react'
import Routes, { headerRoutes } from '../routes/routes'
import { footerRoutes } from '../routes/routes'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Socials from '../socials/socials'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
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
          routes={footerRoutes}
          textColor='white'/>
          <Socials />
      </Toolbar>
    </AppBar>
  )
}

export default Footer
