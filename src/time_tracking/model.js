import uuid from 'node-uuid'
import moment from 'moment'

export const makeHours = attrs => {
  const id = uuid.v4()

  return { ...attrs, id, date: moment(attrs.date).format("YYYY-MM-DD") }
}
