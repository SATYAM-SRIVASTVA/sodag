import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand logo" to="/">sodaG</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          All About Acidity
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Types Of Acidity</a>
          <li class="nav-item">
        <Link class="li" to="/gred">Is it Acidity , Reflux or Gurd</Link>
      </li>
      <li class="nav-item">
        <Link class="li" to="/indigestion">Is it Acidity or Indigestion</Link>
      </li>
      <li class="nav-item">
        <Link class="li" to="/stomach">Why Does Your Stomach Hurt</Link>
      </li>
          <a class="dropdown-item" href="#">Acidity</a>
          <li class="nav-item">
        <Link class="li" to="/understand">Understanding Acidity</Link>
      </li>
      <li class="nav-item">
        <Link class="li" to="/symptoms">Initial Symptoms of Acidity</Link>
      </li>
      <li class="nav-item">
        <Link class="li" to="/living">Living Life Acidity Free</Link>
      </li>
      <li class="nav-item">
        <Link class="li" to="/remedies">Home Remedies For Acidity</Link>
      </li>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">HeartBurn</a>
          <li class="nav-item">
        <Link class="li" to="/understandheartburn">Understanding HeartBurn</Link>
      </li>
      <li class="nav-item">
        <Link class="li" to="/symptomsheartburn">Initial Symptoms of HeartBurn</Link>
      </li>
      <li class="nav-item">
        <Link class="li" to="/remediesheartburn">Home Remedies For HeartBurn</Link>
      </li>
      <a class="dropdown-item" href="#">Gas Relief</a>
          <li class="nav-item">
        <Link class="li" to="/gas">Gas Relief</Link>
      </li>
        </div>
        
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">sodaG Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Discover sodaG</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Connect with sodaG</a>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar