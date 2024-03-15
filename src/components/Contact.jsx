import React from 'react'
import Form from './Form'


function Contact() {
  return (
    <div>
      <div className='bg-cover'>
        <div className='text-center text-light'>
          <h2 className='pt-5'>Contact</h2>
          <p>Home<i className="fa fa-arrow-right ms-3 me-3" data-aos="fade-up"></i>Contact</p>

        </div>
      </div>
      <div className='container' data-aos="fade-up">
        <div className='row'>
          <div className='col-md-6 mt-5'>
            <p>Kindly call us or join our support group on WhatsApp.</p>
            <div>
              <div className='mb-3'>
                <a href="tel:234 9072211222" className='text-decoration-none text-dark'>
                <span className='me-3'>
                <i className="fa fa-phone" aria-hidden="false"></i>
                </span>+234 9072211222</a>
              </div>
              <div className='mt-3'>
                <a href="tel:2348167000077" className='text-decoration-none text-dark'>
                <span className='me-3'>
                <i className=" fab fa-whatsapp" aria-hidden="false"></i>
                </span>+234 8167000077</a>
              </div>
              <div className='mt-3'>
                <a href="mailto: info@crystalshipment.com" className='text-decoration-none text-dark'>
                  <span className='me-3'>
                  <i className="fa fa-envelope" aria-hidden="false"></i>
                  </span>info@crystalshipment.com</a>
              </div>

            </div>
          </div>
          <div className='col-md-6 mt-5'>
            <Form></Form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact