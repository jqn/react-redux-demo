import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import { Main } from './main'
import { Projects } from './projects'
import { TimeTracking } from './time_tracking'

const routes = (
  <Route path="/" component={Main}>
    <IndexRedirect to="/projects" />
    <Route path="projects" component={Projects} />
    <Route path="time_tracking" component={TimeTracking} />
  </Route>
)

export default routes
