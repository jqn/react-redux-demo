/* Redux-Form wrapper for DatePicker component */
import 'react-datepicker/dist/react-datepicker.css'
import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default (field) => {
  const { input: { value, ...rest }, meta: { touched, error } } = field
  const selected = value ? moment(value) : moment()
  return <DatePicker className="form-control" selected={selected} {...rest} />
}
