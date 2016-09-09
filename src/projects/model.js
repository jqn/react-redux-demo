import uuid from 'node-uuid'

export const validate = attrs => {
  const errors = {}
  if(!attrs.name) {
    errors.name = "Required"
  }
  return errors;
}

export const makeProject = attrs => {
  const id = uuid.v4()

  return { ...attrs, id }
}
