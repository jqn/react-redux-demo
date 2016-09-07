import React from 'react'
import { Table } from 'react-bootstrap'

export default props => {
  const { projects } = props

  return (
    <Table striped>
      <thead><tr><th>Project Name</th></tr></thead>
      <tbody>
        { projects.map((project) => <tr key={project.id}><td>{project.name}</td></tr>) }
      </tbody>
    </Table>
  )
}
