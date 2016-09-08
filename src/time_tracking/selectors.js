import { createSelector } from 'reselect'
import { sortBy } from 'lodash'

export const getSelectedProjectId = state => state.hours.selectedProjectId
export const getAllHours = state => state.hours.allHours

export const getSelectedProjectHours = createSelector(
  getSelectedProjectId,
  getAllHours,
  (selectedProjectId, allHours) => {
    const projectHours = allHours.filter(hours => hours.projectId === selectedProjectId)
    return sortBy(projectHours, 'date').reverse()
  }
)
