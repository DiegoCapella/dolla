import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import Home from './pages'
import Signin from './pages/signin'

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={Signin} />
      </Switch>
    </Router >
  )
}

export default App
