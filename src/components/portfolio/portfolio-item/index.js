import React from 'react'
import { object } from 'prop-types'

import './index.scss'

const PortfolioItem = ({ item }) => {
  return (
    <div className="item">
      <h4 className="item__title">
        { item.title }
        &nbsp;&#183;&nbsp;
        { item.year }
      </h4>
      <p className="item__description">
        { item.description }
      </p>
    </div>
  )
}

PortfolioItem.propTypes = {
  item: object
}

export default PortfolioItem