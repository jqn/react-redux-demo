import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form';
import moment from 'moment'
import { sortBy } from 'lodash'
import TimeTrackingView from './TimeTrackingView'
import { logHours, selectProject } from './actions'
import { makeHours } from './model'

const formName = 'logHours'

const form = reduxForm({
  form: formName,
  initialValues: {
    date: moment(),
    amount: 0,
    description: ''
  },
  onSubmit: hours => hours,
  onSubmitSuccess(hours, dispatch) {
    dispatch(logHours(makeHours(hours)))
    dispatch(reset(formName))
  }
})(TimeTrackingView);

const mapStateToProps = state => {
  return {
    projectHours: sortBy(state.hours.allHours.filter(hours => hours.projectId === state.hours.selectedProjectId), 'date').reverse(),
    allProjects: state.projects.allProjects,
    selectedProjectId: state.hours.selectedProjectId
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
