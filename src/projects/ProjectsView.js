import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Field } from 'redux-form'
import { Content } from '../main'
import { InputField } from '../forms'
import ProjectsTable from './ProjectsTable'


export default props => {
  const { allProjects, handleSubmit } = props

  return (
    <Content>
      <div style={{marginBottom: '20px'}}>
        <Form inline onSubmit={handleSubmit}>
          <Field name="name" component={InputField} type="text" placeholder="Project name..."/>{ ' ' }
          <Button bsStyle="success" type="submit">Add Project</Button>
        </Form>
      </div>
      <div>
        { allProjects.length == 0 && "You have no projects." }
        { allProjects.length > 0 && <ProjectsTable projects={allProjects}></ProjectsTable>}
      </div>
    </Content>
  )
}
