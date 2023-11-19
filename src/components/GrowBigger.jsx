import React from 'react'
import img3 from './../assets/img3.png';
const GrowBigger = () => {
  return (
    <div className='bg-nav py-5'>
        <div className="container">
        <div className="row">
            <div className="col-md-6 col-12">
                <img src={img3} alt="" sizes="" style={{width: '100%'}}/>
            </div>
            <div className="col-md-6 col-12 d-flex flex-column align-items-start justify-content-center">
                <h2 className='fw-bolder text-bright '>Grow Bigger</h2>
                <p className='text-light fw-semibold'>
                Be part of the 400+ onboarded users saving with Akawo.me partners using our services and enjoy unlimited offers provided by different Akawo.me partners.
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default GrowBigger