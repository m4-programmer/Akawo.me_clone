import React from 'react'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container">
    <a className="navbar-brand" href="#"><h1 className='fw-bolder text-light' >Akawo</h1></a>
    
    
    <button className="navbar-toggler  bg-primary2 text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      
      <div className="navbar-nav">
        <a className="nav-link text-light d-lg-block d-none" href="#feature">Features</a>
        <a className="nav-link text-light d-lg-block d-none" href="#about">About</a>
        <a className="nav-link text-light d-lg-block d-none" href="#works">How it Works</a>
        <a className="nav-link text-light" href="#tc">T&C</a>
        <a className="nav-link text-light" href="#partner">Become a partner</a>
        <a className="nav-link d-lg-none d-block btn bg-primary2 text-light btn-no-hover" href="#">Become an Agent</a>
      </div>
    </div>
    <div className="ml-auto d-lg-block d-none">
          <a className="btn bg-primary2 text-light btn-no-hover" href="#">Become an Agent</a>
        </div>
    </div>
    
    </nav>
  )
}

export default Nav