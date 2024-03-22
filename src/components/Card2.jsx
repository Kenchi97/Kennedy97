import React from 'react'
import Rec23 from '../assets/Rec23.jpg'
import Rec24 from '../assets/Rec24.jpg'
import Rec25 from '../assets/Rec25.jpg'
import Rec02 from '../assets/Rec02.jpg'
import Rec3 from '../assets/Rec3.jpg'
import Rec4 from '../assets/Rec4.jpg'


function Card2() {
  const CardData = [ 
    {image:Rec23,title:'Air Freight',content:'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation...'},
    {image:Rec24,title:'Sea Freight',content:'Sea Freight plays perhaps the most vital role in most transportation and supply chain a solutions...'},
    {image:Rec25,title:'Land Freight',content:'Cargo are transported at some stage of their journey along the world’s roads where we give...'},
    {image:Rec02,title:'Warehousing',content:'package and store your goods effectively and securely to make sure of...'},
    {image:Rec3,title:'Door to Door Delivery',content:'Our expertise in transport Mangement and planning allows us to design...'},
    {image:Rec4,title:'Packaging & Storage',content:'package and store your goods effectively and securely to make sure of...'},
  ]

  return (
    <div className='container'>
      <div className='row'> 
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
    </div>
    </div>
  )
}

export default Card2