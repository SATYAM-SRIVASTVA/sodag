import React from 'react'
import './Textimg.css'
import img1 from './Assets/img5.jpg'

const Textimg = () => {
  return (

    <div class="grid-container">
    <div class="grid-child purple">
        <img src={img1} alt="" />
    </div>
    <div class="grid-child green">
        <h1>Did You Know ?</h1>
        <p>People who are overweight or have high BMI are more likely to suffer from acidity.</p>
        <a href=''><button className='red'>Learn More</button></a>
    </div>
</div>
  )
}

export default Textimg