import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { reducer as projects } from './projects'
import { reducer as hours } from './time_tracking'

export default combineReducers({
  form,
  projects,
  hours
})
