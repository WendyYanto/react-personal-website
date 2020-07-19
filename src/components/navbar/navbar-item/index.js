import React from 'react'
import { string } from 'prop-types'
import { useQuery } from 'hooks'
import { useHistory } from 'react-router-dom'
import { formatToKebabCase } from 'utils'
import './index.scss'

const NavbarItem = ({ name }) => {
  
  const query = useQuery()
  const history = useHistory()

  const sectionQuery = query.get('section') || 'home'
  const section = formatToKebabCase(name)
  const activeClass = sectionQuery === section ? 'active' : ''

  const handleClick = () => {
    history.push({
      search: `section=${section}`,
    })
  }

  return (
    <li className={activeClass} onClick={handleClick}>
      {name}
    </li>
  )
}

NavbarItem.propTypes = {
  name: string
}

export default NavbarItem
