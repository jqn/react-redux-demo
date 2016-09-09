import React from 'react'
import { connect } from 'react-redux'
import addHoursFormContainer from './addHoursFormContainer'
import TimeTrackingView from './TimeTrackingView'
import { selectProject } from './actions'
import { getSelectedProjectHours, getSelectedProjectId } from './selectors'
import { selectors as projects } from '../projects'

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
export default connect(mapStateToProps, mapDispatchToProps)(addHoursFormContainer(TimeTrackingView))
