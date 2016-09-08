import { LOG_HOURS, SELECT_PROJECT } from './actions'

const initialState = {
  allHours: [],
  selectedProjectId: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOG_HOURS:
    const hours = { ...action.hours, projectId: state.selectedProjectId }
    return { ...state, allHours: [hours].concat(state.allHours) }
    case SELECT_PROJECT:
    return { ...state, selectedProjectId: action.project }
    default:
    return state
  }
}
