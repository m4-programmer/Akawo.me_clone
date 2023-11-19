import React from 'react'

const Box1 = ({title, text, icon, size}) => {
  return (
    <div className={`col-lg-${size ?? 4} col-md-6 col-sm-12 p-3`}>
        <div className="text-light">
        <div className="head text-center">
            {/* To put Icon */}

            <h2 className='fw-bolder'>{title}</h2>
        </div>
        <p className='text-center'>{text}</p>
        </div>
    </div>
  )
}

export default Box1