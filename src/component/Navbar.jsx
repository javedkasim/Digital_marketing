import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
   <>
	<header id="header" className="header d-flex align-items-center sticky-top">
	<div className="container-fluid container-xl position-relative d-flex align-items-center">

	  <a className="logo d-flex align-items-center me-auto">
		 <Link to={'/'}><img src="public/img/home/logo.png" alt="Digital Marketing" classNameName='logo'/> 
	  </Link></a>

	  <nav id="navmenu" className="navmenu">
		<ul>
		  <Link to={'/'}><a href="#hero">Home</a></Link>
		   <li><a href="#about">About</a></li>
		   <li><a href="#services">Services</a></li>
		   <li><a href="#Testimonial">Testimonial</a></li>
		   <Link to={'contact'}><a href="contact">Contact</a></Link>
		</ul>
		<i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
	  </nav>

	  <Link to={'login'}><a className="btn-getstarted">Login</a></Link>

	</div>
  </header>
   </>
  )
}

export default Navbar