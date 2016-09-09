import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form';
import moment from 'moment'
import TimeTrackingView from './TimeTrackingView'
import { logHours, selectProject } from './actions'
import { validate, makeHours } from './model'
import { getSelectedProjectHours, getSelectedProjectId } from './selectors'
import { selectors as projects } from '../projects'

const formName = 'logHours'

const form = reduxForm({
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
})(TimeTrackingView);

const mapStateToProps = state => {
  return {
    projectHours: getSelectedProjectHours(state),
    allProjects: projects.getAllProjects(state),
    selectedProjectId: getSelectedProjectId(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectProject(project) {
      const projectId = project ? project.id : null
      dispatch(selectProject(projectId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(form)
