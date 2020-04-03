import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Routes, { headerRoutes } from '../routes/routes'
import SideMenu from '../side-menu/side-menu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    marginRight: 10
  },
  routes: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  title: {
    color: 'white'
  }
}))

const Navbar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <SideMenu />
          <img
            alt='Logo'
            className={classes.logo}
            src='https://via.placeholder.com/50'/>
          <Typography
            className={classes.title}
            variant="h6"
          >
            Ideias que ajudam
          </Typography>
          <div className={classes.routes}>
            <Routes routes={headerRoutes} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar