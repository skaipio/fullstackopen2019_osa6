const initialState = null

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  let newState

  switch (action.type) {
    case 'NO_FILTER':
      newState = null
      break;
    case 'FILTER':
      newState = action.data.filter
      break;
    default:
      newState = state
  }

  return newState
}

export const clearFilter = () => ({
  type: 'NO_FILTER'
})

export const setFilter = (filter) => ({
  type: 'FILTER',
  data: { filter }
})

export default reducer