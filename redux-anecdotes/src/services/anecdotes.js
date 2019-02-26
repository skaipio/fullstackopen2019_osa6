import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const create = async (anecdoteContent) => {
  const response = await axios.post(baseUrl, asObject(anecdoteContent))
  return response.data
}

const get = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const update = async (id, anecdote) => {
  const response = await axios.put(`${baseUrl}/${id}`, anecdote)
  return response.data
}

export default {
  create,
  get,
  getAll,
  update
}