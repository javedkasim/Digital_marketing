import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from "../../public/img/Home/logo.png"

const Footer = () => {
  return (
   <>
	 <footer id="footer" className="footer">

	<div className="container footer-top">
	  <div className="row gy-4">
		<div className="col-lg-4 col-md-6 footer-about">
		  <a href="index.html" className="d-flex align-items-center">
			 <Link to={'/'}><img src={logoImage} alt="Digital Marketing" classNameName='logo'/> 
</Link>
		  </a>
		  <div className="footer-contact pt-3">
			<p><strong>Address:</strong> Panduranga Nagar, Bannerghatta Road,</p>
			<p>Bangalore- KA - 560076</p>
			<p className="mt-3"><strong>Phone:</strong> <span><a href='tel:7000585903' className='contact-number'>+91 7000 585 903</a></span></p>
			<p><strong>Email:</strong> <span>Contact@digitaltechnology.com</span></p>
		  </div>
		</div>

		<div className="col-lg-2 col-md-3 footer-links">
		  <h4>Useful Links</h4>
		  <ul>
			<li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
			<li><i className="bi bi-chevron-right"></i> <a href="#about">About us</a></li>
			<li><i className="bi bi-chevron-right"></i> <a href="#services">Services</a></li>
			 <Link to={'contact'}><i className="bi bi-chevron-right"></i> <a>Contact-us</a></Link>
		  </ul>
		</div>

		<div className="col-lg-2 col-md-3 footer-links">
		  <h4>Our Services</h4>
		  <ul>
			<li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
			<li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
			<li><i className="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
			<li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
		  </ul>
		</div>

		<div className="col-lg-4 col-md-12">
		  <h4>Follow Us</h4>
		  <div className="social-links d-flex">
			<a href=""><i className="bi bi-twitter-x"></i></a>
			<a href=""><i className="bi bi-facebook"></i></a>
			<a href=""><i className="bi bi-instagram"></i></a>
			<a href=""><i className="bi bi-linkedin"></i></a>
		  </div>
		</div>

	  </div>
	</div>

	<div className="container copyright text-center mt-4">
	  <p>© 2025 <span>Copyright</span> <strong className="px-1 sitename">Digital Technology</strong> <span>All Rights Reserved</span></p>
	  <div className="credits">
		Designed by <a href="#">Digital Technology</a> Distributed by 
		<a href="#"> Digital Technology</a>
	  </div>
	</div>

  </footer>
   </>
  )
}

export default Footer