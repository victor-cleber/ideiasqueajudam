import axios from '../axios'

export async function getIdeas() {
  try {
    const response = await axios.get('/ideias/')
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}
