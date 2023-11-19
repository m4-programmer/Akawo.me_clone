import React from 'react'
import download from './../assets/download.png'
const Footer = () => {
  return (
    <div className='pt-5' style={{overflow: 'hidden',width: '100%'}}>
        <div className="container mt-5 ">

            <div className="row">
                <div className="col-md-4">
                    <a className="navbar-brand" href="#"><h1 className='fw-bolder text-light' >Akawo</h1></a>
                    <p className='text-light fw-semi-bold'>Your fast and reliable saving platform for your business.</p>
                </div>

                <div className="col-md-4 text-center ">
                    <p className="text-light fw-semi-bold ">
                        Terms & Condition
                    </p>
                    <div className='d-flex justify-content-center'>
                        
                        <div className='px-2'>
                            <i className="fa-brands fa-facebook fa-xl  text-bright"></i>
                        </div>
                        <div className='px-2'>
                            <i className="fa-brands fa-linkedin fa-xl  text-bright"></i>
                        </div>
                        <div className='px-2'>
                            <i className="fa-brands fa-instagram fa-xl  text-bright"></i>
                        </div>
                    </div>
                </div>

                <div className="col-md-4  text-center">
                    <p className='text-light '>
                        +2348164659672  help@akawo.me
                    </p>
                    <a href="#" className='d-flex justify-content-center align-items-center'>
                        <img src={download} alt=""  style={{width: '100px', height: '32px'}}/>
                    </a>
                </div>

            </div>

            <p className="text-center text-sm text-light py-3">
                © Copyright Akawo. All Rights Reserved
            </p>

        </div>
    </div>
  )
}

export default Footer