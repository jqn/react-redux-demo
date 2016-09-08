import React from 'react'
import { Form, FormControl } from 'react-bootstrap'

export default props => {
  const { allProjects, selectedProjectId, selectProject } = props

  const projectSelected = (evt) => {
    const id = evt.target.value
    const project = allProjects.find(project => project.id === id)
    selectProject(project)
  }

  return (
    <Form inline style={{marginBottom: '20px'}}>
      <FormControl componentClass="select" placeholder="select" value={selectedProjectId ? selectedProjectId : ''} onChange={projectSelected}>
        <option>Select project</option>
        { allProjects.map(project => <option key={project.id} value={project.id}>{project.name}</option>)}
      </FormControl>
    </Form>
  )
}
