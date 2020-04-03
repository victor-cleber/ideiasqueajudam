import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Home from '../home/home'

export const footerRoutes = [
  {
    path: '/quem-somos',
    name: 'Quem Somos',
    component: ''
  },
  {
    path: '/parceiros',
    name: 'Parceiros',
    component: ''
  },
  {
    path: '/seja-um-apoiador',
    name: 'Seja um Apoiador',
    component: ''
  }
]

export const headerRoutes = [
  {
    path: '/',
    name: 'Home',
    component: <Home />
  },
  {
    path: '/saude',
    name: 'Saúde',
    component: ''
  },
  {
    path: '/educacao',
    name: 'Educação',
    component: ''
  },
  {
    path: '/economia',
    name: 'Economia',
    component: ''
  },
  {
    path: '/social',
    name: 'Social',
    component: ''
  }
]

const useStyles = makeStyles({
  list: props => ({
    display: 'flex',
    flexDirection: props.isVertical ? 'column' : 'row',
    marginBottom: 0,
    '& li': {
      listStyle: 'none',
      marginRight: 15,
      '& a': {
        textDecoration: 'none',
        color: props.textColor ? props.textColor : 'white',
        fontSize: 18
      }
    }
  })
})

const Routes = ({ isVertical, textColor, routes }) => {
  const props = {
    isVertical,
    textColor
  }
  const classes = useStyles(props)
  return (
    <div>
      <nav>
        <ul className={classes.list}>
          {routes.map(route => {
            const {path, name} =  route
            return <li key={name}>
              <NavLink
                to={path}>{name}</NavLink>
            </li>
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Routes
