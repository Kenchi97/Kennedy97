import React from 'react'
import Card2 from './Card2'
import Rec05 from '../assets/Rec05.jpg'

function Services() {
  return (
    <div>
    <div className='bg-cover'>
        <div className='text-center text-light'>
            <h1 className='pt-5'>Service</h1>
            <p>Home<i className="fa fa-arrow-right ms-3 me-3" data-aos="fade-up"></i>Service</p>
        </div>
    </div>

    <div className="container mt-5" data-aos="fade-up">
    <Card2></Card2>
    <div className="row" data-aos="fade-up">
      <div className="col-md-6">
        <img src={Rec05} alt="" className='img-fluid' />
      </div>
      <div className="col-md-6">
        <h2>THE COMPLETE SOLUTION</h2>
        <div className="bg-red"></div>
        
        <p>Our warehousing services are known nationwide to be one of the reliable, safe and affordable , because we take pride in delivering the best of warehousing services,at the most reasonable prices. Pleasure and praising pain was born and i will give you a complete account of system, and expound actual teachings occasionally circumstances.</p>
      </div>
    </div>
    </div>

    </div>
  )
}

export default Services