import React from 'react'

const Slide = ({children}) => {
  return (
    <div className='slide'>
      <div className='slide-container'>
        {children}
      </div>
    </div>
  )
}

export default Slide
