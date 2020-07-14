import React from 'react'
import { string } from 'prop-types'
import { useQuery } from 'hooks'
import { withRouter } from 'react-router-dom'
import { formatToKebabCase } from 'utils'
import './index.scss'

const NavbarItem = ({ name, history }) => {
  const query = useQuery()
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
  name: string,
}

export default withRouter(NavbarItem)
