/* Redux-Form wrapper for native input element. */
import React from 'react'

export default (field) => {
  const { type, input, meta: { touched, error }, ...rest} = field
  const inputComponent = <input type={type} { ...input} className="form-control" {...rest} />
  if(touched && error) {
    // wrap element in error container if there are validation errors
    return <div className="form-group has-error">{inputComponent}</div>
  }
  else {
    return inputComponent
  }
}
