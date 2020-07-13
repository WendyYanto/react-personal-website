import React from 'react'
import './index.scss'
import config from 'config'
import NavbarItem from './navbar-item'
import { Link } from 'react-router-dom'

const ITEMS = config.navbar_items

const Navbar = () => {
  const renderItems = () => {
    return ITEMS.map((item) => <NavbarItem name={item} key={item} />)
  }

  return (
    <div className='navbar home'>
      <div className='navbar__title'>
        <Link to='/'>Logo</Link>
      </div>
      <ul className='navbar__items'>{renderItems()}</ul>
    </div>
  )
}

export default Navbar
