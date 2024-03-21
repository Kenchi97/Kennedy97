import React from 'react'
import Rec23 from '../assets/Rec23.jpg'
import Rec24 from '../assets/Rec24.jpg'
import Rec25 from '../assets/Rec25.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Card() {
  const CardData = [
    {image:Rec23,title:'Air Freight',content:'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation...'},
    {image:Rec24,title:'Sea Freight',content:'Sea Freight plays perhaps the most vital role in most transportation and supply chain a solutions...'},
    {image:Rec25,title:'Land Freight',content:'Cargo are transported at some stage of their journey along the world’s roads where we give...'},
  ]
  
  const settings = {
    autoplay: true,
    autoplayspeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className='Container'>
      <div className='row'> 
      <Slider {...settings}>
         {CardData.map((card,) => (
          <div className='col-md-4 mb-5'>
          <div className="card">
              <img srcSet={card.image} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className="card-title">{card.title}</h4>
                <p className="card-text">{card.content} <a href='' className='text-danger text-decoration-none'>Read more</a></p>
              </div>
          </div>
        </div>      
        ))} 
      </Slider>
    </div>
    </div>
  )
}

export default Card