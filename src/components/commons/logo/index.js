import React from 'react'
import { func } from 'prop-types'

import './index.scss'

const Logo = ({ onClick }) => {
  return (
    <div className='logo' onClick={onClick}>
      <strong>W</strong>
    </div>
  )
}

Logo.propTypes = {
  onClick: func
}

export default Logo