import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Routes, { headerRoutes } from '../routes/routes'
import SideMenu from '../side-menu/side-menu'
import Button from '@material-ui/core/Button'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

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
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  },
}))

const Navbar = () => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <div className={classes.root}>
       <AppBar position='static' className={classes.root}>
        <Toolbar>
          <SideMenu />
          <Link to='/'>
            <img
              alt='Logo'
              className={classes.logo}
              src={logo} />
          </Link>
          <div className={classes.routes}>
            <Routes 
              routes={headerRoutes}
            />
          </div>
          <Button
            onClick={() => history.push('/doe-uma-ideia')}
            variant="outlined"
            color="primary">
            Doe uma ideia
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar