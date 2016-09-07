import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form';
import ProjectsView from './ProjectsView'
import { addProject } from './actions'

const formName = 'addProject'

const form = reduxForm({
  form: formName,
  onSubmit: project => project,
  onSubmitSuccess(project, dispatch) {
    dispatch(addProject(project))
    dispatch(reset(formName))
  }
})(ProjectsView);

const mapStateToProps = state => {
  return {
    allProjects: state.projects.allProjects
  }
}

export default connect(mapStateToProps)(form)
