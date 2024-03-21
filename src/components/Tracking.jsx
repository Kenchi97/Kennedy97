import React, {useState}  from'react';


function Tracking() {
  const [trackingId, setTrackingId] = useState ('') ;
  const [error, setError] = useState ('') ;

  const handleInputChange = (e) => {
    setTrackingId(e.target.value) ;
  } ;

  const handleSubmit = (e) => {
    e.preventDefault() ;
    if(!trackingId.trim()) {
      setError('Please enter a valid Tracking ID') ;
    } else if
    (trackingId.trim().length !== 10) {
      setError('TrackingID must not be less than 10 characters.') ;
    } else {
      setError('');
      alert('You have to connect to an API before it will work') ;
      //process tracking logic here
      console.log('Tracking ID:',trackingId) ;
      window.location.href= '/' ;
    }
  }
  return (
    <>
      <div className='bg-cover'>
        <div className='text-center pt-3 text-light'>
          <h2 className='pt-5'>Tracking</h2>
          <p>Home<i className="fa fa-arrow-right ms-3 me-3" data-aos="fade-up"></i>Tracking</p>
        </div>
      </div>
      <div className='container mt-3' data-aos="fade-up">
        <div className='row'>
          <div className='col-md-6'>
            <h2>TRACK YOUR SHIPMENT </h2>
            <div className="bg-red mt-3"  ></div>
            <div className='pt-3'>
              <p>If you require maximum visibility to your Freight transactions, contact our logistic customer team or you can track your cargo by using below tracking system.</p> 
            </div>
          </div>
          <div className='col-md-6'>
            <form className='d-flex' action="" onSubmit={handleSubmit}>
              <input type="text" className='form-control me-3' placeholder='Enter your tracking ID Here'  value={trackingId} onChange={handleInputChange}/> {error && <div className='text-danger'>{error}</div>}
              </form>
              <button className='btn btn-danger mt-3'>Track</button>
            

        </div>
        </div>
        

      </div>      

    </>
  )
}

export default Tracking