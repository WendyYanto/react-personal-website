import React from 'react'
import { func } from 'prop-types'

import './index.scss'

const Cross = ({ onClick }) => {
  return (
    <div className='cross' onClick={onClick}>
      <div className='cross__bar' />
      <div className='cross__bar' />
    </div>
  )
}

Cross.propTypes = {
  onClick: func
}

export default Cross