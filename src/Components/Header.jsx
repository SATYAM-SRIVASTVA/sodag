import React from 'react'
import './Header.css'
import Slider from 'react-slick'
import img1 from '../Assets/img1.jpg'
import img6 from '../Assets/img6.jpg'
import img7 from '../Assets/img7.jpg'

const Header = () => {

    var settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true
      };
  return (
    <div className="main-contianer">
    <div className="diagonal">
        <div className="img-container">
        <Slider {...settings}>
      <div className='second-container'>
        <img src={img1} alt="img2"/>
        <a class="banner-logo" href="#"><h1>sodaG</h1></a>
        <div className="banner-heading">
        <h1 className='banner-text'>Get Fast Relief <br/>From Acidity</h1>
        <h5 className='banner-para'>sodaG get to works in 6 seconds</h5>
        <button className='banner-btn'><span className='btn-text'>Find Out How sodaG Works</span></button>
        </div>
        </div>
      <div className='second-container'>
        <img src={img6} alt="" />
        <a class="banner-logo" href="#"><h1>sodaG</h1></a>
        <div className="banner-heading">
        <h1 className='banner-text'>Get Fast Relief <br/>From Acidity</h1>
        <h5 className='banner-para'>sodaG get to works in 6 seconds</h5>
        <button className='banner-btn'>Find Out How sodaG Works</button>

        </div>
      </div>
      <div className='second-container'>
        
        <img src={img7} />
        <a class="banner-logo" href="#"><h1>sodaG</h1></a>
        <div className="banner-heading">
        <h1 className='banner-text'>Get Fast Relief <br/>From Acidity</h1>
        <h5 className='banner-para'>sodaG get to works in 6 seconds</h5>
        <button className='banner-btn'>Find Out How sodaG Works</button>

        </div>
      </div>
    </Slider>
        </div>
    </div>
    </div>


  )
}

export default Header