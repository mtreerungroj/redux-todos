import React from 'react'
import { connect } from 'react-redux'
import { VisibilityFilter, setVisibilityFilter } from '../actions'

const VisibilityFilterBar = ({ setVisibilityFilter }) => (
  <div>
    <button onClick={() => setVisibilityFilter(VisibilityFilter.SHOW_ALL)}>
      ALL
    </button>
    <button onClick={() => setVisibilityFilter(VisibilityFilter.SHOW_ACTIVE)}>
      ACTIVE
    </button>
    <button
      onClick={() => setVisibilityFilter(VisibilityFilter.SHOW_COMPLETED)}
    >
      COMPLETE
    </button>
  </div>
)

const mapDispatchToProps = dispatch => ({
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
})

export default connect(null, mapDispatchToProps)(VisibilityFilterBar)
