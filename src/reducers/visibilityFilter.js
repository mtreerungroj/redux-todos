import { VisibilityFilter, setVisibilityFilter } from '../actions'
import { handleActions } from 'redux-actions'
// const visibilityFilter = (state = VisibilityFilter.SHOW_ALL, action) => {
//   if (action.type === 'SET_VISIBILITY_FILTER') {
//     return action.filter
//   }
//   return state
// }

// alternative
const visibilityFilter = handleActions(
  {
    [setVisibilityFilter] (state, action) {
      return action.payload.filter
    }
    // alternative
    // [setVisibilityFilter] (state, { payload: { filter } }) {
    //   return filter
    // }
  },
  VisibilityFilter.SHOW_ALL
)

export default visibilityFilter
