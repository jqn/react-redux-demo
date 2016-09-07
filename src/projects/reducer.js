import { ADD_PROJECT } from './actions'
import { makeProject } from './model'

const initialState = {
  allProjects: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_PROJECT:
    return { ...state, allProjects: [makeProject(action.project)].concat(state.allProjects) }
    default:
    return state
  }
}
