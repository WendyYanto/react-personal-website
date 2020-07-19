import React from 'react'

import './index.scss'

const Cross = ({ onClick }) => {
  return (
    <div className='cross' onClick={onClick}>
      <div className='cross__bar' />
      <div className='cross__bar' />
    </div>
  )
}

export default Cross