import React, { lazy } from 'react'
import config from 'config'
import { withRouter } from 'react-router-dom'

import ProfileImage from 'assets/images/bg-header.png'

import './index.scss'

const Button = lazy(() => import(/* webpackChunkName: "button" */'components/commons/button'))

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
        <p>{ROLE}</p>
        <Button text='Contact Me' onClick={goToContact} />
      </div>
      <div className='header__image'>
        <img src={ProfileImage} alt='profile-pic' />
      </div>
    </div>
  )
}

export default withRouter(Header)
