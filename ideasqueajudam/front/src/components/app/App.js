import React from 'react'
import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom'
import Navbar from '../navbar/navbar'
import Home from '../home/home'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/saude'>
          saude
        </Route>
        <Route path="/educacao">
          educação
        </Route>
        <Route path="/economia">
          economia
        </Route>
        <Route path="/social">
          social
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
