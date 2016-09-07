import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { Main } from './main'
import { Home } from './home'
import { About } from './about'
import { Projects } from './projects'

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="projects" component={Projects} />
    </Route>
  </Router>
)

export default router
