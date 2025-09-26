import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
       <section id="contact" className="contact section">

      <div className="container section-title">
        <h2>Login Panel</h2>
      </div> 
       <div className="container">

        <div className="row gy-4">


          <div className="col-lg-12">
            <form className="php-email-form">
              <div className="row gy-4">
 <div className="col-md-6">
                  <label for="name-field" className="pb-2">Your Name</label>
                  <input type="text"  className="form-control" required="" />
                </div>

                <div className="col-md-6">
                  <label for="email-field" className="pb-2">Your Email</label>
                  <input type="email" className="form-control" required="" />
                </div>


                <div className="col-md-12 text-center">
                  <Link to={'/Welcome'}><button type="submit">Login</button></Link>
                </div>

              </div>
            </form>
          </div>

        </div>

      </div> 

    </section>
    </>
  )
}

export default Login