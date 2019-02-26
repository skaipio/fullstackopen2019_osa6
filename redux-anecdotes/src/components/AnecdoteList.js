import React from 'react';
import { connect } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = ({anecdotes, setNotification, voteFor}) => {
  const vote = (id) => {
    console.log('vote', id)
    voteFor(id)

    const anecdote = anecdotes.find((anecdote) => anecdote.id === id)
    
    setNotification(`you voted '${anecdote.content}'`, 5)
  }

  return anecdotes.map(anecdote =>
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id)}>vote</button>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  const anecdotesToShow = state.filter
    ? state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
    : state.anecdotes
  return {
    anecdotes: anecdotesToShow
  }
}

const mapDispatchToProps = {
  setNotification,
  voteFor,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList);