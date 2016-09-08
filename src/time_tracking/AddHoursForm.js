import 'react-datepicker/dist/react-datepicker.css'
import React, { Component } from 'react'
import { Button, ControlLabel, Form, FormControl } from 'react-bootstrap'
import { Field } from 'redux-form'
import DatePicker from 'react-datepicker'
import moment from 'moment'

const renderDatePicker = (field) => {
  const { value, ...rest } = field.input
  const selected = value ? moment(value) : moment()
  return <DatePicker className="form-control" selected={selected} {...rest} />
}

export default props => {
  const { handleSubmit } = props

  return (
    <Form inline onSubmit={handleSubmit} style={{marginBottom: '20px'}}>
      <ControlLabel>Date:</ControlLabel>{ ' ' }
      <Field name="date" component={renderDatePicker} />{ ' ' }
      <ControlLabel>Amount:</ControlLabel>{ ' ' }
      <Field name="amount" component="input" className="form-control" type="number" placeholder="Hours..." />{ ' ' }
      <ControlLabel>Description:</ControlLabel>{ ' ' }
      <Field name="description" component="input" className="form-control" type="text" placeholder="What you did..."/>{ ' ' }
      <Button bsStyle="success" type="submit">Log</Button>
    </Form>
  )
}
