import React from 'react'
import Carousel from '../carousel/carousel'
import Dropdown from '../dropdown/dropdown'
import IdeiasList from '../ideias-list/ideias-list'
import Content from '../containers/content'
import Footer from '../footer/footer'

const Home = () => {
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
