import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  const actionDispatcher = (action) => () => {
    store.dispatch({
      type: action
    })
  }

  return (
    <div>
      <button onClick={good}>hyvä</button> 
      <button onClick={actionDispatcher('OK')}>neutraali</button> 
      <button onClick={actionDispatcher('BAD')}>huono</button>
      <button onClick={actionDispatcher('ZERO')}>nollaa tilastot</button>
      <div>hyvä {store.getState().good}</div>
      <div>neutraali {store.getState().ok}</div>
      <div>huono {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
