import React from 'react'


import {Component} from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import hero from './Images/hero-img.png'
import phone from './Images/phone-08.png'
import wireless from './Images/wireless-02.png'
import watch from './Images/watch-07.png'
import './Hero.css'

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" ,opacity:0.1}}
      onClick={onClick}
    />
  );
}
function Carousel(){

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        
        }
      },
     
    ]
  };
  return (
<div className>
  
<Slider {...settings}>
  <div className='hero'>
    <div className='hero-left'>
<h2>50% Off For Your Shopping</h2>
<p>Lorem ipsum dolar sit amet,quis lobertis,consequat,quam acium ut convalis</p>
<h4>visit clooections</h4>
  </div>
       <div className='hero-right'> <img src={hero} alt="" className="w-80" /></div>
      </div>
      <div className='hero'>
    <div className='hero-left'>
<h2>50% Off For Your Shopping</h2>
<h3>Lorem ipsum dolar sit amet,quis lobertis,consequat,quam acium ut convalis</h3>
<h4>visit clooections</h4>
  </div>
       <div className='hero-right'> <img src={phone} alt="" className="w-80" /></div>
      </div>
      <div className='hero'>
    <div className='hero-left'>
<h2>50% Off For Your Shopping</h2>
<h3>Lorem ipsum dolar sit amet,quis lobertis,consequat,quam acium ut convalis</h3>
<h4>visit clooections</h4>
  </div>
       <div className='hero-right'> <img src={wireless} alt="" className="w-80" /></div>
      </div>

      <div className='hero'>
    <div className='hero-left'>
<h2>50% Off For Your Shopping</h2>
<h3>Lorem ipsum dolar sit amet,quis lobertis,consequat,quam acium ut convalis</h3>
<h4>visit clooections</h4>
  </div>
       <div className='hero-right'> <img src={watch} alt="" className="w-80" /></div>
      </div>    
    </Slider></div>


    
    
  );
}

    
    
export default Carousel
    
