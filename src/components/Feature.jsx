import React from 'react'
import FlexboxLayout from './FlexboxLayout'

const Feature = () => {
  return (
    <div className="mt-5 pt-5 " id='feature'>
        <div className='container ' style={{marginTop: '150px'}}>
            <div className="header  d-flex flex-column align-items-center justify-content-center text-light" >
                <h2 className='text-bright fw-bolder'>Tailor-made Features</h2>
                <p className='px-1' style={{maxWidth: '500px'}}>Akawo is designed for traders, merchants, fast-growing businesses and anyone looking for a smarter and convenient way to save with any Akawo.me agents.</p>
            </div>
            {/* Row */}
            <FlexboxLayout />
        </div>
    </div>
  )
}

export default Feature