import React from 'react'
import { Table } from 'react-bootstrap'
import moment from 'moment'

export default props => {
  const { hours } = props

  return (
    <Table striped>
      <thead><tr><th>Date</th><th>Amount</th><th>Description</th></tr></thead>
      <tbody>
        { hours.map((hourItem) => (
          <tr key={hourItem.id}>
            <td>{moment(hourItem.date).format("L")}</td>
            <td>{hourItem.amount}</td>
            <td>{hourItem.description}</td>
          </tr>
        )) }
      </tbody>
    </Table>
  )
}
