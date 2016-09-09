import React, { Component } from 'react'
import { Button, ControlLabel, Form, FormControl } from 'react-bootstrap'
import { Field } from 'redux-form'
import { InputField, DatePickerField } from '../forms'

export default props => {
  const { handleSubmit } = props

  return (
    <Form inline onSubmit={handleSubmit} style={{marginBottom: '20px'}}>
      <ControlLabel>Date:</ControlLabel>{ ' ' }
      <Field name="date" component={DatePickerField} />{ ' ' }
      <ControlLabel>Amount:</ControlLabel>{ ' ' }
      <Field name="amount" component={InputField} className="form-control" type="number" placeholder="Hours..." />{ ' ' }
      <ControlLabel>Description:</ControlLabel>{ ' ' }
      <Field name="description" component={InputField} className="form-control" type="text" placeholder="What you did..."/>{ ' ' }
      <Button bsStyle="success" type="submit">Log</Button>
    </Form>
  )
}
