import React from 'react'
import man from './../assets/man.png'
const Agent = () => {
  return (
    <div className='py-4 bg-agent'>
        <div className="container">
            <div className="row text-light" >
                <div className="col-md-5 col-12 d-flex flex-column align-items-start justify-content-center">
                    <h2 className='text-bright fw-bolder text-center'>WHO WE ARE</h2>
                    <p>
                        Want to work with us? Register as an Akawo.me agent and get assigned to a partnered organization. 
                        If you wish to start your own akawo business using our services then proceed registering as a partner ↓
                    </p>
                    <button className="bg-primary2 btn btn-sm text-light btn-no-hover">Become an Agent</button>
                </div>
                <div className="col-md-7 col-12 ">
                    <img src={man} style={{width: '100%'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Agent