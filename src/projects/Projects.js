import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form';
import ProjectsView from './ProjectsView'
import { addProject } from './actions'
import { makeProject } from './model'

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
    allProjects: state.projects.allProjects
  }
}

export default connect(mapStateToProps)(form)
