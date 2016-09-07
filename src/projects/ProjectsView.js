import React, { Component } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { Field } from 'redux-form'
import { Content } from '../main'
import { MainPanel, Toolbar } from '../shared'
import ProjectsTable from './ProjectsTable'

export default props => {
  const { allProjects, handleSubmit } = props

  return (
    <div>
      <Content>
        <Toolbar>
          <Form inline onSubmit={handleSubmit}>
            <Field name="name" component="input" className="form-control" type="text" placeholder="Project name..."/>{ ' ' }
            <Button bsStyle="success" type="submit">Add Project</Button>
          </Form>
        </Toolbar>
        <MainPanel>
          { allProjects.length == 0 && "You have no projects." }
          { allProjects.length > 0 && <ProjectsTable projects={allProjects}></ProjectsTable>}
        </MainPanel>
      </Content>
    </div>
  )
}
