import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { Main } from './main'
import { Home } from './home'
import { About } from './about'
import { Projects } from './projects'
import { TimeTracking } from './time_tracking'

const routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="projects" component={Projects} />
    <Route path="time_tracking" component={TimeTracking} />
  </Route>
)

export default routes
