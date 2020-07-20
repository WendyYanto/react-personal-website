import React , { lazy } from 'react'

import './index.scss'

const Logo = lazy(() => import(/* webpackChunkName: "logo" */'components/commons/logo'))

const Footer = () => {
  return (
    <div className='section contact'>
      <Logo />
      <p>
        <i class="fa fa-envelope"></i>&nbsp;&nbsp;yanto.wendy98@gmail.com  
      </p>
      <p>
        Copyright &copy; 2020 Wendy Yanto
      </p>
    </div>
  )
}

export default Footer
