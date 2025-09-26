import React from 'react'
import { Link } from 'react-router-dom'
import bannerImage from "../public/img/Home/banner-img.png"

const Banner = () => {
  return (
    <>
    <section id="hero" className="hero section">

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Digital Marketing</h1>
            <p>Our Company expert digital marketing and web development services.</p>
            <div className="d-flex">
              <Link to={'contact'}><a className="btn-get-started">Contact Us</a></Link>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" >
            <img src={bannerImage} className="img-fluid animated" alt="Banner Image" />
          </div>
        </div>
      </div>

    </section>
    </>
  )
}

export default Banner