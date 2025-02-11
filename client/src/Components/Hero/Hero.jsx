import React from 'react'
// import { Link } from 'react-router-dom';
import slide1 from '../../images/slide1.jpg'
import slide2 from '../../images/slide2.jpg'
import slide3 from '../../images/slide3.jpg'
// import {slide1, slide2, slide3} from '../images/'
import './hero.css'

export default function Home() {
  return (
    <>

      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100 hero-image as" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100 hero-image as" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100 hero-image as" alt="..." />
          </div>
        </div>
      </div>
      
    </>
  )
}
