import axios from 'axios'

const API_URL = '/api/comments/'

// Create new comment
const createComment = async (commentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, commentData, config)

  return response.data
}

// Get user comments
const getComments = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}


// Delete user Comment
const deleteComment = async (commentId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + commentId, config)

  return response.data
}

const commentService = {
  createComment,
  getComments,
  deleteComment,
}

export default commentService