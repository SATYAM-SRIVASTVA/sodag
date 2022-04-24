import React from 'react'
import './Textimg.css'
import img1 from '../Assets/img5.jpg'

const Textimg = () => {
  return (

    <div class="grid-container">
    <div class="grid-child purple">
        <img src={img1} alt="" />
    </div>
    <div class="grid-child green">
        <h1>Try sodaG Today</h1>
    </div>
</div>
  )
}

export default Textimg