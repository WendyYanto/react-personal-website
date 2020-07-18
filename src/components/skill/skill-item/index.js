import React from 'react'
import { object } from 'prop-types'

import './index.scss'

const SkillItem = ({ item }) => {
  return (
    <div className='skill-item'>
      <div className='skill-item__title'>
        <span>{item.title}</span>
        <span>{item.value}%</span>
      </div>
      <div className='skill-item__bar'>
        <div className='content' style={{width: `${item.value}%`}} />
      </div>
    </div>
  )
}

SkillItem.propTypes = {
  item: object
}

export default SkillItem