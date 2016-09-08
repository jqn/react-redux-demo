import React from 'react'
import { Collapse } from 'react-bootstrap'
import { Content } from '../main'
import ProjectSelector from './ProjectSelector'
import AddHoursForm from './AddHoursForm'
import HoursTable from './HoursTable'

export default props => {
  const { allProjects, selectedProjectId, projectHours } = props

  if(allProjects.length == 0) {
    return (
      <Content>
        <div>You have no projects.</div>
      </Content>
    )
  }
  else {
    return (
      <Content>
        <ProjectSelector { ...props}></ProjectSelector>
        <Collapse in={!!selectedProjectId}>
          <div>
            <AddHoursForm { ...props}></AddHoursForm>
            { projectHours.length > 0 && <HoursTable hours={projectHours} /> }
          </div>
        </Collapse>
      </Content>
    )
  }
}
