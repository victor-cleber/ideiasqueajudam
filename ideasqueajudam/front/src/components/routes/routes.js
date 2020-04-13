import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Tab, Tabs } from '@material-ui/core'
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
        fontSize: 18
      }
    }
  })
})

const Routes = ({ isVertical, textColor, routes, location: { pathname } }) => {
  const props = {
    isVertical,
    textColor
  }
  // const classes = useStyles(props)

  const [value, setValue] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs 
      orientation={isVertical ? 'vertical' : 'horizontal'}
      value={value}
      onChange={handleChange}
      variant='scrollable'
      scrollButtons='on'
      indicatorColor='primary'
      textColor='primary'
    >
      { routes.map(route => {
        const { path, name } = route
        if (pathname.startsWith(path) && value.length < path.length) {
          setValue(path);
        }
        return (
          <Tab
            key={name}
            label={name}
            value={path}
            component={Link} to={path} 
          />
        )})}
    </Tabs>
    // <div>
    //   <nav>
    //     <ul className={classes.list}>
    //       {routes.map(route => {
    //         const {path, name} =  route
    //         return (
    //           <Tab key={name} label={name} value={path} to={path} />)
    //       })}
    //     </ul>
    //   </nav>
    // </div>
  )
}

export default withRouter(Routes)
