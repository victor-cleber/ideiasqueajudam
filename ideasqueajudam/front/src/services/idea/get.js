import axios from '../axios'

export async function getIdea(id) {
  try {
    const response = await axios.get(`/ideias/${id}/`)
    return response
  } catch (error) {
    console.error(error)
  }
}
