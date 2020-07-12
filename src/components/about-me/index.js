import React from 'react'
import { withRouter } from 'react-router-dom'
import config from 'config'
import Button from 'components/commons/button'

import './index.scss'

const DESCRIPTION = config.description

const AboutMe = ({ history }) => {
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

export default withRouter(AboutMe)
