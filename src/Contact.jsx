import React, { useState } from 'react'
import {softwareBaseUrl} from "./axiosInstance";


const Contact = () => {

  
  const [software, setSoftware] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  
  const handleFormChange = (e) => {
    const {name, value} = e.target;
    setSoftware((prev)=>({
      ...prev,
      [name]:value
    }));
  };
  
  const handleSubmit = async ()=>{
    try {
  if(!software?.name || !software?.phone || !software?.email || !software?.message){
    alert('All fields are reuired')
  }
  
      const {data}= await softwareBaseUrl.post("/addsoftware", software);
      if(data?.Successs){
        alert(data?.Message);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  console.log('software', software)
  
  return (
    <>

     <section id="contact" className="contact section">

      <div className="container section-title">
        <h2>Contact</h2>
        <p>Our Team connecting you with us in 24 hours</p>
      </div> 
       <div className="container">

        <div className="row gy-4">

          <div className="col-lg-5">

            <div className="info-wrap">
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Panduranga Nagar, Bannerghatta Road, Bangalore- KA - 560076</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p><a href='tel:7000585903' className='contact-number'>+91 7000 585 903</a></p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>Contact@digitaltechnology.com</p>
                </div>
              </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.75618337596!2d77.61833427416855!3d12.794332018741793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ac4118aa827%3A0xd0612b84eac47d4!2sBannerghatta%20Rd%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1758800792266!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
          </div> 

          <div className="col-lg-7">
            <form className="php-email-form">
              <div className="row gy-4">

                <div className="col-md-6">
                  <label for="name-field" className="pb-2">Your Name</label>
                  <input type="text" value={software.name} onChange={handleFormChange} name="name" className="form-control" required="" />
                </div>

                <div className="col-md-6">
                  <label for="email-field" className="pb-2">Your Email</label>
                  <input type="email" className="form-control" value={software.email} onChange={handleFormChange} name="email" required="" />
                </div>

                <div className="col-md-12">
                  <label for="subject-field" className="pb-2">Phone Number</label>
                  <input type="text" className="form-control" value={software.phone} onChange={handleFormChange} name="phone" required="" />
                </div>

                <div className="col-md-12">
                  <label for="message-field" className="pb-2">Message</label>
                  <textarea className="form-control" rows="5"  value={software.message} onChange={handleFormChange} name="message" required=""></textarea>
                </div>

                <div className="col-md-12 text-center">

                  <button type="submit" onClick={handleSubmit}>Send Message</button>
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

export default Contact