import React from 'react'
import { Carousel as CarouselComponent } from 'antd'
import 'antd/dist/antd.css'
import './styles.css'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'

const Carousel = () => {
  return (
    <CarouselComponent autoplay autoplaySpeed={5000}>
      <div>
        <img
          src={img1}
          alt='ideia'/>
      </div>
      <div>
        <img
          src={img2}
          alt='boa-ideia'/>
      </div>
      <div>
        <img
          src={img3}
          alt='ideia-colaborativa'/>
      </div>
    </CarouselComponent>
  )
}

export default Carousel
