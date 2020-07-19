import React , { lazy, useState } from 'react'
import config from 'config'

import './index.scss'

const Button = lazy(() => import(/* webpackChunkName: "button" */'components/commons/button')) 
const PortfolioItem = lazy(() => import(/* webpackChunkName: "portfolio-item" */'./portfolio-item')) 

const PORTFOLIOS = config.portfolios.reverse()

const EXPAND = 'See more'
const COLLAPSE = 'See less'

const Portfolio = () => {

  const [first, second, third] = PORTFOLIOS
  const firstThreeItems = [first, second, third]

  const [items, setItems] = useState([...firstThreeItems])
  const [isExpand, setExpand] = useState(false)
  const [buttonText, setButtonText] = useState(EXPAND)

  const renderItems = () => {
    return items.map((item) => <PortfolioItem key={item.title} item={item} />)
  }

  const toggleSeeMore = () => {
    const data = !isExpand ? PORTFOLIOS : firstThreeItems
    const text = !isExpand ? COLLAPSE  : EXPAND

    setExpand(!isExpand)
    setItems([...data])
    setButtonText(text)
  }

  return (
    <div className='section portfolio'>
      <h1 className='portfolio__title'>Portfolio</h1>
      <div className='portfolio__items'>
        {renderItems()}
      </div>
      <div className='portfolio__action'>
        <Button text={buttonText} onClick={toggleSeeMore} />
      </div>
    </div>
  )
}

export default Portfolio