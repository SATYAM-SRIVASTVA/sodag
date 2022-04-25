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
      <li class="nav-item active">
        <Link class="nav-link" to="/acidity">All About Acidity</Link>
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