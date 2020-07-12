import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from 'hooks'
import { withRouter } from 'react-router-dom'
import './index.scss'

const NavbarItem = ({ name, history }) => {
  const query = useQuery()
  const sectionQuery = query.get('section') || 'home'
  const section = name.toLowerCase().trim().split(' ').join('-')
  const activeClass = sectionQuery === section ? 'active' : ''

  const handleClick = () => {
    history.push({
      search: `section=${section}`
    })
  }

  return <li className={activeClass} onClick={handleClick}>{name}</li>
}

NavbarItem.propTypes = {
  name: PropTypes.string
}

export default withRouter(NavbarItem)
