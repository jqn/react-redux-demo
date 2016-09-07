import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { reducer as projects } from './projects'

export default combineReducers({
  form,
  projects
})
