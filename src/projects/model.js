import uuid from 'node-uuid'

export const makeProject = attrs => {
  const id = uuid.v4()
    
  return { ...attrs, id }
}
