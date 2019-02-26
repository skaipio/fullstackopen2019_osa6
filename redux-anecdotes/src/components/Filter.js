import React from 'react'
import { connect } from 'react-redux'
import { setFilter, clearFilter } from '../reducers/filterReducer';

const Filter = ({clearFilter, setFilter}) => {
  const handleChange = (event) => {
    // input-kentän arvo muuttujassa event.target.value
    if (!event.target.value || event.target.value.length === 0) {
      clearFilter()
    } else {
      setFilter(event.target.value)
    }
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  clearFilter,
  setFilter
}

export default connect(null, mapDispatchToProps)(Filter);