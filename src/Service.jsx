import React from 'react'
import socialImage from "../public/img/Home/social.png"
import seoImage from "../public/img/Home/seo.png"
import googleImage from "../public/img/Home/google.png"
import graphicsImage from "../public/img/Home/graphics.png"
import websiteImage from "../public/img/Home/website.png"
import mobileImage from "../public/img/Home/mobile.png"


const Service = () => {
  return (
   <>
   
     <section id="services" className="services section light-background">

     
      <div className="container section-title">
        <span>Services</span>
        <h2>Services</h2>
        <p>Digital Marketing and web Development services</p>
      </div>

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-4 col-md-6">
            <div className="service-item position-relative">
              <div className="icon">
               <img src={socialImage} className="img-fluid animated" alt="Social Media" />
              </div>
              <a href="#" className="stretched-link">
                <h3>Social Media Marketing</h3>
              </a>
              <p>Social media marketing is the practice of using social media platforms to connect with an audience, build a brand, increase sales, and drive website traffic.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item position-relative">
              <div className="icon">
                <img src={seoImage} className="img-fluid animated" alt="SEO" />
              </div>
              <a href="#" className="stretched-link">
                <h3>SEO</h3>
              </a>
              <p>SEO, or Search Engine Optimization, is the strategic process of enhancing a website's visibility and ranking on search engine results pages</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item position-relative">
              <div className="icon">
                <img src={googleImage} className="img-fluid animated" alt="Google Ads" />
              </div>
              <a href="#" className="stretched-link">
                <h3>Google ads</h3>
              </a>
              <p>Google Ads, formerly known as Google AdWords, is an online advertising platform developed by Google that allows businesses to display advertisements on Google's search engine results pages</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item position-relative">
              <div className="icon">
                <img src={graphicsImage} className="img-fluid animated" alt="Graphics Design" />
              </div>
              <a href="#" className="stretched-link">
                <h3>Graphics Design</h3>
              </a>
              <p>Graphic design is the practice of creating visual content to communicate specific messages to a particular audience, combining creativity with strategic thinking to inform, inspire, or influence viewers.</p>
              <a href="#" className="stretched-link"></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item position-relative">
              <div className="icon">
                 <img src={websiteImage} className="img-fluid animated" alt="Website Development" />
              </div>
              <a href="#" className="stretched-link">
                <h3>Website Development</h3>
              </a>
              <p>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static </p>
              <a href="#" className="stretched-link"></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item position-relative">
              <div className="icon">
                <img src={mobileImage} className="img-fluid animated" alt="Mobile Development" />
              </div>
              <a href="#" className="stretched-link">
                <h3>Mobile App Development</h3>
              </a>
              <p>Mobile app development is the process of creating software applications designed to run on mobile devices such as smartphones, tablets, and digital assistants.
 This process involves writing code, designing user interfaces, integrating device-specific features</p>
              <a href="#" className="stretched-link"></a>
            </div>
          </div>

        </div>

      </div>

    </section>

   </>
  )
}

export default Service