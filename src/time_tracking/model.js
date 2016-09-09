import uuid from 'node-uuid'
import moment from 'moment'

export const validate = attrs => {
  const errors = {}
  if(!attrs.date) {
    errors.date = "Required"
  }
  if(!attrs.amount || attrs.amount <= 0) {
    errors.amount = "Required"
  }
  return errors
}
export const makeHours = attrs => {
  const id = uuid.v4()

  return { ...attrs, id, date: moment(attrs.date).format("YYYY-MM-DD") }
}
