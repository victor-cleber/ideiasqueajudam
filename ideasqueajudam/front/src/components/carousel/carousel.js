import React from 'react'
import { Carousel as CarouselComponent } from 'antd'
import 'antd/dist/antd.css'
import './styles.css'

const Carousel = () => {
  return (
    <CarouselComponent autoplay autoplaySpeed={5000}>
      <div>
        <h3>Promova uma ideia</h3>
      </div>
      <div>
        <h3>Seja nosso parceiro</h3>
      </div>
      <div>
        <img
          src='https://espacofiteventos.com.br/wp-content/uploads/2018/06/Como-ter-uma-boa-ideia-profissional--1000x580.jpg'
          alt='some-ideia'/>
      </div>
    </CarouselComponent>
  )
}

export default Carousel
