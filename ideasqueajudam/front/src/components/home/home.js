import React from 'react'
import Carousel from '../carousel/carousel'
import Dropdown from '../dropdown/dropdown'

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
      <Dropdown
        options={temporaryOptions}
        onChange={handleSelectedOption} />
    </>
  )
}

export default Home
