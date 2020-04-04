import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Routes, { headerRoutes } from '../routes/routes'

const useStyles = makeStyles( theme => ({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
}))

const SideMenu = () => {
  const classes = useStyles();
  const [open, isOpen] = useState(false)

  const toggleSideMenu = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    isOpen(open)
  }

  const list = () => {
    return <div
      role="presentation"
      onClick={toggleSideMenu(false)}
      onKeyDown={toggleSideMenu(false)}
    >
      <Routes
        routes={headerRoutes}
        isVertical
      />
    </div>
  }

  return (
    <>
      <IconButton
        onClick={toggleSideMenu(true)}
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleSideMenu(false)}>
        { list() }
      </Drawer>
    </>
  )
}
export default SideMenu
