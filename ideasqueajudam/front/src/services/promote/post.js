import axios from '../axios'

export async function promoteIdeia(payload) {
  try {
    const response = await axios.post('/ideias/promote', payload)
    return response
  } catch (error) {
    console.error(error)
  }
}
