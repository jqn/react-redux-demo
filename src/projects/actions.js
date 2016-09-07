export const ADD_PROJECT = "projects/ADD_PROJECT"

export const addProject = (project) => {
  return {
    type: ADD_PROJECT,
    project: project
  }
}
