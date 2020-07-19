import React, { lazy } from 'react'
import { useHistory } from 'react-router-dom'
import config from 'config'
import Path from 'assets/images/bg-path.png'

import './index.scss'

const Button = lazy(() => import(/* webpackChunkName: "button" */'components/commons/button')) 
const DESCRIPTION = config.description

const AboutMe = () => {

  const history = useHistory()

  const goToPortfolio = () => {
    history.push({
      search: `section=portfolio`,
    })
  }

  const downloadCV = () => {
    history.push({
      search: `section=contact`,
    })
  }

  return (
    <div className='section about-me'>
      <div className='about-me__title'>
        <img src={Path} alt='about-me-background' />
        <h1>About Me</h1>
      </div>
      <div className='about-me__description'>
        <p>{DESCRIPTION}</p>
        <div className='description-action'>
          <Button text='View Works' onClick={goToPortfolio} />
          <Button text='Download CV' secondary onClick={downloadCV} />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
