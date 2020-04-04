import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Routes, { headerRoutes } from '../routes/routes'
import SideMenu from '../side-menu/side-menu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
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
}))

const Navbar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
       <AppBar position='static' className={classes.root}>
        <Toolbar>
          <SideMenu />
          <img
            alt='Logo'
            className={classes.logo}
            src='https://via.placeholder.com/50' />
          <Typography
            className={classes.title}
            variant="h6"
          >
            Ideias que ajudam
          </Typography>
          <div className={classes.routes}>
            <Routes 
              routes={headerRoutes}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar