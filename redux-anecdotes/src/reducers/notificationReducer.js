const initialState = ''

const reducer = (state = initialState, action) => {
  let newState

  switch (action.type) {
    case 'SET_NOTIFICATION':
      newState = action.data.notification
      break;
    case 'CLEAR_NOTIFICATION':
      newState = action.data.notification
      break;
    default:
      newState = state
  }

  return newState
}

export const setNotification = (notification, displayTime) => async (dispatch) => {
  dispatch({
    type: 'SET_NOTIFICATION',
    data: { notification }
  })
  setTimeout(() => dispatch(clearNotification()), displayTime * 1000)
}

export const clearNotification = () => ({
  type: 'CLEAR_NOTIFICATION',
  data: { notification: '' }
})

export default reducer