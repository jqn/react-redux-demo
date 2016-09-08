export const LOG_HOURS = "hours/LOG_HOURS"
export const SELECT_PROJECT = "hours/SELECT_PROJECT"

export const selectProject = project => {
  return {
    type: SELECT_PROJECT,
    project: project
  }
}

export const logHours = hours => {
  return {
    type: LOG_HOURS,
    hours: hours
  }
}
