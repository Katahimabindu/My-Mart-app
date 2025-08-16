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
      style={{ ...style, display: "block", background: "pink" ,opacity:0.9}}
      onClick={onClick}
    />
  );
}
export default function simpleSlider(){

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
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
// {/* <div className> */}
  
<Slider {...settings}>
  <div className='hero'>
    <div className='hero-left'>
<h2>50% Off For Your Shopping</h2>
<p>spotlight with our brands</p>
<h4>visit collections</h4>
  </div>
       <div className='hero-right'> <img src={hero} alt="" /></div>
      </div>
      <div className='hero'>
    <div className='hero-left'>
<h2>50% Off For Your Shopping</h2>
<p>shine through our top brands</p>
<h4>visit collections</h4>
  </div>
       <div className='hero-right'> <img src={phone} alt=""  /></div>
      </div>
      <div className='hero'>
    <div className='hero-left'>
<h2>50% Off For Your Shopping</h2>
<p>spotlight with our brands</p>
<h4>visit collections</h4>
  </div>
       <div className='hero-right'> <img src={wireless} alt="" /></div>
      </div>

      <div className='hero'>
    <div className='hero-left'>
<h2>50% Off For Your Shopping</h2>
<p>spotlight with our brands</p>
<h4>visit collections</h4>
  </div>
       <div className='hero-right'> <img src={watch} alt=""  /></div>
      </div>    
    </Slider>


    
    
  );
}

    
    
// export default Carousel
    
