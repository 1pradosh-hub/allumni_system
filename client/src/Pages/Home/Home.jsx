import React from 'react'
// import { Link } from 'react-router-dom';

import './home.css'
import ReactCardSlider from '../../Components/Reactslider/ReactCardSlider'
import Hero from '../../Components/Hero/Hero'
import Event from '../../Components/Events/Event'
import Sponsers from '../../Components/Sponser/Sponsers'
import NewsForm from '../../Components/News/NewsForm'
import Blog from '../../Components/Blog/Blog'


export default function Home() {

  // const sliderClick = (slider)=>{
  //   alert("hello world");
  // }

  const slides = [
    {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description"},
    {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description"},
    {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description"},
    {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description"},
    {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description"},
    {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description"},
    {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description"},
  ]

  return (
    <>
    {/* This is a hero section */}
      <Hero />

      {/* This is a testimonial section */}
      <div className='d-flex justify-content-center car'>
      <h3>Our Alumni</h3>
      </div>

      <div className="slider-wrapper">
        <ReactCardSlider slides={slides} />
      </div>

      {/* This is event section */}
      <Event/>

      <div>
      <NewsForm/>
      </div>

      <Sponsers/>

      <Blog/>
      
    </>
  )
}
