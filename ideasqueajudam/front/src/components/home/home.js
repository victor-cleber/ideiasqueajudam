import React, { useEffect, useState } from 'react'
import Carousel from '../carousel/carousel'
import Dropdown from '../dropdown/dropdown'
import IdeiasList from '../ideias-list/ideias-list'
import Content from '../containers/content'
import Footer from '../footer/footer'
import { getIdeas } from '../../services/ideas/get'

const Home = () => {
  const [ideas, setIdeas] = useState([])
  useEffect(() => {
    async function fetchIdeas() {
      const ideas = await getIdeas()
    }

    fetchIdeas()
    console.log('entrou')
  }, [])
  const temporaryOptions = [
    {
      id: 'jack',
      value: 'Jack'
    },
    {
      id: 'mary',
      value: 'Mary'
    },
    {
      id: 'john',
      value: 'John'
    }
  ]
  const handleSelectedOption = value => {
    console.log(value)
  }
  return (
    <>
      <Carousel />
      <Content>
        <Dropdown
          options={temporaryOptions}
          onChange={handleSelectedOption}
        />
        <IdeiasList />
      </Content>
      <Footer />
    </>
  )
}

export default Home
