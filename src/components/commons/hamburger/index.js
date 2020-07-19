import React from 'react'

import './index.scss'

const Hamburger = ({ onClick }) => {
  return (
    <div className='hamburger' onClick={onClick}>
      <div className='hamburger__bar' />
      <div className='hamburger__bar' />
      <div className='hamburger__bar' />
    </div>
  )
}

export default Hamburger