import React from 'react'
import { func } from 'prop-types'

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

Hamburger.propTypes = {
  onClick: func
}

export default Hamburger