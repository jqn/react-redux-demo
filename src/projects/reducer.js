import { ADD_PROJECT } from './actions'

const initialState = {
  allProjects: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_PROJECT:
    return { ...state, allProjects: [action.project].concat(state.allProjects) }
    default:
    return state
  }
}
