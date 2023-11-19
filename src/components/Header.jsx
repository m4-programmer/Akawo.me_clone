import React from 'react'
import Nav from './Nav'
import img1 from './../assets/img1.png';
import download from './../assets/download.png'
const Header = () => {
  return (
    <div className='bg-nav ' style={{height: '100vh'}}>
        <Nav />
        {/* Row */}
        <div className="container ">
            <div className="row text-light mt-5 mb-5" style={{height: 500}}>
                <div className="col-md-6 d-flex flex-column align-items-start justify-content-center text-center text-lg-start py-5">
                    <h1 className='fw-bolder'>
                        A <span className='md:text-primary'>Smart Solution</span> For Traditional Thrift savings system
                    </h1>
                    <p>
                        Providing paperless records by digitizing cash savings and thrift operations using USSD infrastructure, providing service to help promote your business.
                    </p>
                    <a href="#">
                        <img src={download} alt=""  style={{width: '100%', height: '32px'}}/>
                    </a>
                    
                </div>
                <div className="col-md-6">
                    <img src={img1} style={{width: '100%', maxWidth: '400px'}}/>
                </div>
            </div>
        </div>
    </div>
  
  )
}

export default Header