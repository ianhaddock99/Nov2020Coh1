import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contactUs">Contact Us</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/comments">Comments</Link> */}

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
      <Link className="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
      <Link className="nav-item nav-link" to="/forms">Forms</Link>
      <Link className="nav-item nav-link" to="/formhook">Form Hook</Link>
      <Link className="nav-item nav-link" to="/lifting_state">Lifting State</Link>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
