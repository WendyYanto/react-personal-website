import React from 'react'
import config from 'config'
import Button from 'components/commons/button'
import { withRouter } from 'react-router-dom'

import './index.scss'

const USERNAME = config.username
const ROLE = config.role

const Header = ({ history }) => {
  const goToContact = () => {
    history.push({
      search: `section=contact`,
    })
  }

  return (
    <div className='section header'>
      <div className='header__description'>
        <h1>I'm {USERNAME}</h1>
        <h3>{ROLE}</h3>
        <Button text='Contact Me' onClick={goToContact} />
      </div>
      <div className='header__image' />
    </div>
  )
}

export default withRouter(Header)
