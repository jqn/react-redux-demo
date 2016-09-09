import { reduxForm, reset } from 'redux-form'
import moment from 'moment'
import { validate, makeHours } from './model'
import { logHours } from './actions'

const formName = 'logHours'

export default reduxForm({
  form: formName,
  initialValues: {
    date: moment(),
    amount: 0,
    description: ''
  },
  validate,
  onSubmit: hours => hours,
  onSubmitSuccess(hours, dispatch) {
    dispatch(logHours(makeHours(hours)))
    dispatch(reset(formName))
  }
})
