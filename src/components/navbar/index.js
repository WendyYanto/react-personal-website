import React, { lazy, useState } from 'react'
import config from 'config'
import withResponsive from 'hocs/with-responsive' 
import { bool } from 'prop-types'

import './index.scss'

const NavbarItem = lazy(() => import(/* webpackChunkName: "navbar-item" */'./navbar-item'))
const Hamburger = lazy(() => import(/* webpackChunkName: "hamburger" */'components/commons/hamburger'))
const Cross = lazy(() => import(/* webpackChunkName: "cross" */'components/commons/cross'))
const Logo = lazy(() => import(/* webpackChunkName: "logo" */'components/commons/logo'))

const ITEMS = config.navbar_items

const Navbar = ({ isTablet }) => {

  const [ visibleSidebar, setVisibleSidebar ] = useState(false)

  const renderItems = () => {
    return ITEMS.map((item) => <NavbarItem name={item} key={item} />)
  }

  const handleToggle = () => {
    setVisibleSidebar(!visibleSidebar)
  }

  return (
    <div className='navbar home'>
      <div className='navbar__title'>
        <Logo />
      </div>
      {!isTablet && 
        <ul className='navbar__items'>
          {renderItems()}
        </ul>}
      {isTablet && 
        <div className='navbar__mobile'>
          <div className='icon'>
            <Hamburger onClick={handleToggle} />
          </div>
          {visibleSidebar && 
            <div className='sidebar'>
              <div className='icon'>
                <Cross onClick={handleToggle} />
              </div>
              <ul className='sidebar__items' onClick={handleToggle}>
                {renderItems()}
              </ul>
            </div>}
        </div>}
    </div>
  )
}

Navbar.propTypes = {
  isTablet: bool
}

export default withResponsive(Navbar)
