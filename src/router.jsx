import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './app.jsx'
import Home from './home.jsx'
import About from './about.jsx'

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Router>
)

export default router
