import React from 'react'
import phone from './../assets/img1.png';
import weAre from './../assets/weAre.png';
const Works = () => {
  return (
    <div className='mt-5 text-light mb-5 pb-5'>
        <div className="container" id="works">
            <h1 className='text-bright fw-bolder text-center'>How it Works</h1>
            <p className='text-center'>To get started identify any Akawo Organization near you or agents using Akawo.me services and register.</p>

            <div className="mt-5 pt-5">
                <div className="row">
                    {/* Left Section */}
                    <div className="col-md-4 d-flex flex-column col-sm-6 col-12" >
                        <div className="card-section float-right " style={{textAlign: 'right', width: "269px"}}>
                            <button className="bg-primary2 text-light p-2 px-3 fw-bold my-3" style={{border:'none', borderRadius: "5px" }}>
                                1
                            </button>
                            <h4 className='fw-bolder'>Sign up</h4>
                            <p >sign up with your contact information.</p>
                        </div>

                        <div className="card-section float-right mt-5 pt-5" style={{textAlign: 'right', width: "269px"}}>
                            <button className="bg-primary2 text-light p-2 px-3 fw-bold my-3" style={{border:'none', borderRadius: "5px" }}>
                                3
                            </button>
                            <h4 className='fw-bolder'>Create Savings plan</h4>
                            <p >Create flexible daily, weekly or monthly savings plan.</p>
                        </div>
                    </div>
                    {/* Middle Section for Lg Screens */}
                    <div className="col-md-4 d-lg-block d-none">
                        <img src={phone} alt="" style={{width: '100%'}}/>
                    </div>

                    {/* Right Section */}
                    <div className="col-md-4 d-flex flex-column col-sm-6 col-12" >
                        <div className="card-section float-left  px-5" style={{textAlign: 'left', width: "360px"}}>
                            <button className="bg-primary2 text-light p-2 px-3 fw-bold my-3" style={{border:'none', borderRadius: "5px" }}>
                                2
                            </button>
                            <h4 className='fw-bolder'>Organization Code</h4>
                            <p >Input an organization code given to you by your Organization Agent using Akawo.me service.</p>
                        </div>

                        <div className="card-section float-left mt-5 pt-5 px-5"  style={{textAlign: 'left', width: "360px"}}>
                            <button className="bg-primary2 text-light p-2 px-3 fw-bold my-3" style={{border:'none', borderRadius: "5px" }}>
                                4
                            </button>
                            <h4 className='fw-bolder'>Start Saving</h4>
                            <p >Start saving using any of your flexible savings plan.</p>
                        </div>
                    </div>
                    
                </div>
            </div>


            {/* Who we Are */}
            <div className="mt-5 pt-5">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <img src={weAre} style={{width: '100%'}}  />
                    </div>
                    <div className="col-md-6 col-12 d-flex flex-column align-items-start justify-content-center">
                    <h1 className='text-bright fw-bolder text-center'>WHO WE ARE</h1>
                    <p className='fw-semi-bold'>Akawo.me is a smart solution to the historical and traditional thrift savings system called Akawo. 
                        Akawo.me was set up to reduce the number of unbanked and underbanked Nigerians by making relevant financial products and 
                        services accessible. Having built a customer relationship system for thrift operations using simple and intelligent mobile technologies.
                         Our system is designed to digitalize the traditional savings, leveraging on existing akawo organizations 
                        and agents as we do NOT hold any money transacted between users and partnered organizations and agents.</p>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Works