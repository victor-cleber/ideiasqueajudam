import React from 'react'
import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom'
import Navbar from '../navbar/navbar'
import { headerRoutes, footerRoutes } from '../routes/routes'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {[...headerRoutes, ...footerRoutes].map(route => {
          const { path, name, component } = route
          return <Route key={name} exact path={path}>
            {component}
          </Route>
        })}
      </Switch>
    </BrowserRouter>
  )
}

export default App
