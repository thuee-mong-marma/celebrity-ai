import React from 'react'

const Loader = ({ text }) => {
  return (
    <div className='loader-container'>
      {text && <p>{text}</p>}
      <div className='loader'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Loader
