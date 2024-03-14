import React from 'react'
import Rec5 from '../assets/Rec5.jpg'
import Card from './Card'
import Rec26 from '../assets/Rec26.jpg'
import Rec27 from '../assets/Rec27.jpg'
import Rec28 from '../assets/Rec28.jpg'
import Form from './Form'


function Homepage() {
  return (
    <div>
    <div className="hero">
      <div className="container text-light text-center pt-5" data-aos="fade-up">
        <h1 className="pt-5 mt-5" >Easy & Quick Cargo Shipping Services</h1>
        <p style={{fontSize:"24px"}}>Book Low cost sea freight shipping services. Get an instant Quote.</p>
        <a href="" className="btn btn-danger text-light">Track Goods Here</a>
      </div>
    </div>
    <div className="container pt-5">
      <div className="text-center" data-aos="fade-up">
        <h2>Welcome to Crystal Shipment</h2>
        <div className="bg-red mx-auto"></div>
        <p className="pt-3"> Crystal Shipment is ore than Logistics. We can also optimise your packaging, manage your materials sourcing, and so much more</p>
      </div>
    
      <div className="row">
        <div className="col-md-6" data-aos="fade-up"  >
        <img src={Rec5} className="img-fluid rounded" alt=""></img>
        </div>
        
        <div className="col-md-6">
          <p className="text-danger">TRANSPORTATION COMPANY</p>
          <h2>We Provide Full Range Logistics Solutions</h2>
          <p>We Strongly believe that pursuing all of these goals is in our interest and the interest of all of our stakeholders in our customers, employers, invsetors, and the planet as a whole. We add value to cargo peoples interaction with us, with excellent Services or products. Engaging our employees and nurture investment on the stock holds market we show concern, by engaging our employees and nuture investment on the stock holds market we show concern.  </p>
          <a href="" className="btn btn-danger">Learn more</a>
          
        </div>
      </div>
  



      <div className="text-center pt-5 mb-3" data-aos="fade-up">
      <p className="text-danger">TYPES OF LOGISTIC</p>
      <h2>Covering all Logistics Fields</h2>
      </div>

      <div>
      <Card></Card>
      </div>

      <div className="text-center"data-aos="fade-up">
        <a href="" className="btn btn-danger">Load more</a>
      </div>
    </div>

    <div className='bg-warning mt-5' style={{minHeight: '200px', padding: '20px 0'}}>
      <div className='container pt-5'>
      <div className='row d-flex justify-content-center' >
        <div className='col-md-8'>
          <h2>Delivering your world one package at a time</h2>
          <p>Crystal Shipment is more than logistics.</p>

        </div>
        <div className='col-md-4 text-md-end text-sm-start'>
        <a href="" className=" btn btn-danger">Request a Quote</a>

        </div>
      </div>
      </div>

    </div>
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6' data-aos="fade-up">
          <h2>WHY CHOOSE US ?</h2>
          <div className="d-flex mt-3">
            <div className="flex-grow-1 me-2">
              <img src={Rec26} alt="" />
            </div>
            <div className="flex-grow-1 ms-2">
            <h4>Global Supply Chain Solutions</h4>
            <p>Efficiently unleash cross-media information without cross-media value.</p>
            </div>
          </div>
          <div className="d-flex mt-3">
            <div className="flex-grow-1 me-2">
              <img src={Rec27} alt="" />
            </div>
            <div className="flex-grow-1 ms-2">
            <h4>Mobile Shipment Tracking</h4>
            <p>We offer intelligent concepts for road and tail as well as complex special.</p>
            </div>
          </div>
          <div className="d-flex mt-3">
            <div className="flex-grow-1 me-2">
              <img src={Rec28} alt="" />
            </div>
            <div className="flex-grow-1 ms-2">
            <h4>Careful Handling of valuable Goods</h4>
            <p>Cargo HUB are transported at some stage of their journey along the worlds roads.</p>
            </div>
          </div>
          
        
        </div>
        <div className='col-md-6' data-aos="fade-up">
          <h2>REQUEST A QUOTE</h2>
          <Form></Form>
        </div>        

        </div>
      </div>

    </div>

  )
}

export default Homepage