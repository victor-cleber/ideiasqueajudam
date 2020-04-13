import axios from '../axios'

export async function getCategories() {
  try {
    const response = await axios.get('/temas/')
    return response
  } catch (error) {
    console.error(error)
  }
}
