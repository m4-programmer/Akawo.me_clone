import React from 'react'
import img2 from './../assets/img2.png'
const Manage = () => {
  return (
    <div className=' bg-savings' >
    <div className="container">
        <div className="row text-light" >
            <div className="col-md-5 d-flex flex-column align-items-start justify-content-center">
                <h1 className='text-light fw-bolder lead-1'>Manage All Savings From Your Mobile Device</h1>
                <p>
                All savings are managed from one device, save daily, bulky and withdraw with ease, all in one device.
                </p>
                <button className="bg-dark btn btn-md btn2-no-hover text-bright">Get the App</button>
            </div>
            <div className="col-md-7 ">
                <img src={img2} style={{width: '100%'}} />
            </div>
        </div>
    </div>
</div>
  )
}

export default Manage