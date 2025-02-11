import React from 'react';
import './Slider.css';
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
import {useManualSlide} from '../../Hooks/useManualSlide'
const ReactCardSlider =(props)=>{

    const { sliderRef, slideLeft, slideRight } = useManualSlide();

    // const infiniteSlides = [...props.slides, ...props.slides]

    return(
        <div id="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>
            <div id="slider" ref={sliderRef}>
               { 
                props.slides.map((slide,index)=>{
                        return(
                            <div className="slider-card" key={index}>
                            {/* <div className="slider-card" key={index} onClick={()=>slide.clickEvent()}> */}
                                <div className="slider-card-image" style={{backgroundImage:`url(${slide.image})`,backgroundSize:'cover'}}></div>
                                <p className="slider-card-title">{slide.title}</p>
                                <p className="slider-card-description">{slide.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
        </div>
    )
}
export default ReactCardSlider;