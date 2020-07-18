import React from 'react'
import config from 'config'
import './index.scss'
import SkillItem from './skill-item'

const ITEMS = config.skills

const Skills = () => {

  const renderItems = () => {
    return ITEMS.map(item => <SkillItem item={item} />)
  }

  return (
    <div className='section skills'>
      <h1 className='skills__title'>
        Skills
      </h1>
      <div className='skills__items'>
        {renderItems()}
      </div>
    </div>
  )
}

export default Skills