import React, { useEffect, useState } from 'react'
import Carousel from '../carousel/carousel'
import Dropdown from '../dropdown/dropdown'
import IdeiasList from '../ideias-list/ideias-list'
import Content from '../containers/content'
import Footer from '../footer/footer'
import { getIdeas } from '../../services/ideas/get'
import { getCategories } from '../../services/categories/get'
import Grid from '@material-ui/core/Grid'

const Home = () => {
  const [ideas, setIdeas] = useState([])
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function fetchIdeas() {
      const response = await getIdeas()
      console.log('getIdeas', response)
      setIdeas(response.data)
    }
    async function fetchCategories() {
      const response = await getCategories()
      console.log('getCategories', response)
      setCategories(response.data)
    }

    fetchIdeas()
    fetchCategories()
  }, [])

  const handleSelectedCategory = value => {
    console.log(value)
  }

  return (
    <>
      <Carousel />
      <Content>
        <Grid
          spacing={3}
          container
          direction='column'
        >
          <Grid item xs={12}>
            {categories.length > 0 &&
            <Dropdown
              options={categories}
              onChange={handleSelectedCategory}
            />}
          </Grid>
          <Grid item xs={12}>
            {ideas.length > 0 && <IdeiasList ideas={ideas} />}
          </Grid>
        </Grid>
      </Content>
      <Footer />
    </>
  )
}

export default Home
