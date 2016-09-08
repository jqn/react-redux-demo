import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form';
import ProjectsView from './ProjectsView'
import { addProject } from './actions'
import { makeProject } from './model'
import { getAllProjects } from './selectors'

const formName = 'addProject'

const form = reduxForm({
  form: formName,
  onSubmit: project => project,
  onSubmitSuccess(project, dispatch) {
    dispatch(addProject(makeProject(project)))
    dispatch(reset(formName))
  }
})(ProjectsView);

const mapStateToProps = state => {
  return {
    allProjects: getAllProjects(state)
  }
}

export default connect(mapStateToProps)(form)
