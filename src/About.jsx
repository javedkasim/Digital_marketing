import React from 'react'
import { Link } from 'react-router-dom'
import aboutImage from "../public/img/Home/about.webp"

const About = () => {
  return (
   <>
   <section id="about" className="about section">

      <div className="container section-title">
        <span>About Us<br /></span>
        <h2>About Us</h2>
        <p>This Company Provide best service and good support and on time delivered project.</p>
      </div>

      <div className="container">

        <div className="row gy-4">
          <div className="col-lg-6 position-relative align-self-start">
            <img src={aboutImage} className="img-fluid" alt="About us" />
          </div>
          <div className="col-lg-6 content">
            <h3>Digital and Web Development service provide.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
              <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
              <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
          </div>
        </div>

      </div>

    </section>
   </>
  )
}

export default About