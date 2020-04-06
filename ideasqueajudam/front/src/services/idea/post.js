import axios from '../axios'

export async function saveIdea(payload) {
  try {
    const response = await axios.post('/ideias', payload)
    return response
  } catch (error) {
    console.error(error)
  }
}
