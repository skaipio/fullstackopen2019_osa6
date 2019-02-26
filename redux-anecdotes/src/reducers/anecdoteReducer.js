import anecdoteService from '../services/anecdotes'

const initialState = []

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  let newState

  switch (action.type) {
    case 'VOTE':
      const stateCopy = state.filter(anecdote => anecdote.id !== action.data.anecdote.id)
      stateCopy.push(action.data.anecdote)
      newState = stateCopy
      break;
    case 'NEW_ANECDOTE':
      newState = [...state, action.data.anecdote]
      break;
    case 'INITIALIZE_ANECDOTES':
      newState = action.data.anecdotes
      break;
    default:
      newState = state
  }

  return newState.sort((left, right) => right.votes - left.votes)
}

export const voteFor = (id) => async (dispatch) => {
  const anecdote = await anecdoteService.get(id)
  anecdote.votes = anecdote.votes + 1
  const updatedAnecdote = await anecdoteService.update(id, anecdote)
  return dispatch({
    type: 'VOTE',
    data: { anecdote: updatedAnecdote }
  })
}

export const createAnecdote = (anecdoteContent) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.create(anecdoteContent)
    return dispatch({
      type: 'NEW_ANECDOTE',
      data: { anecdote }
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    return dispatch({
      type: 'INITIALIZE_ANECDOTES',
      data: { anecdotes }
  })}
}

export default reducer