import React from 'react'
import { object } from 'prop-types'

import WEB from 'assets/icon/web.png'
import MOBILE from 'assets/icon/mobile.png'

import './index.scss'

const PortfolioItem = ({ item }) => {
  const image = item.platform === 'WEB' ? WEB : MOBILE

  return (
    <div className='item'>
      <div className='item__icon'>
        <img src={image} alt='platform' />
      </div>
      <h4 className='item__title'>
        {item.title}
        &nbsp;&#183;&nbsp;
        {item.year}
      </h4>
      <p className='item__description'>
        {item.description}
      </p>
    </div>
  )
}

PortfolioItem.propTypes = {
  item: object
}

export default PortfolioItem