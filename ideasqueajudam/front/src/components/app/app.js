import React from 'react'
import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom'
import Navbar from '../navbar/navbar'
import { headerRoutes, footerRoutes } from '../routes/routes'
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme/muiTheme';
import SendIdea from '../send-idea/send-idea'
import Idea from '../idea/idea'

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          {[...headerRoutes, ...footerRoutes].map(route => {
            const { path, name, component } = route
            return <Route key={name} exact path={path}>
              {component}
            </Route>
          })}
          <Route path='/doe-uma-ideia'>
            <SendIdea />
          </Route>
          <Route path='/ideia/:id'>
            <Idea />
          </Route>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

export default App
