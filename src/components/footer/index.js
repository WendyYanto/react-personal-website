import React , { lazy } from 'react'

import './index.scss'

const Logo = lazy(() => import(/* webpackChunkName: "logo" */'components/commons/logo'))

const Footer = () => {
  return (
    <div className='section contact'>
      <Logo />
      <p>
        Contact Me
      </p>
      <p>
        <a href="mailto:yanto.wendy98@gmail.com"><i class="fa fa-envelope"></i></a>
        &nbsp;&nbsp;
        <a href="https://www.instagram.com/wendy.yanto/"><i class="fa fa-instagram"></i></a>
        &nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/wendyyanto/"><i class="fa fa-linkedin"></i></a>
        &nbsp;&nbsp;
        <a href="https://github.com/WendyYanto"><i class="fa fa-github"></i></a>
      </p>
      <p>
        Copyright &copy; 2020 Wendy Yanto
      </p>
      <p className='contact__designer-info'>
        Designed by&nbsp;
        <a 
          href="https://www.behance.net/cellinetannial"
          rel='noreferrer noopener'
          target="_blank">
          <u>Celline T</u>
        </a>
      </p>
    </div>
  )
}

export default Footer
