import React from "react";
import PropTypes from 'prop-types';
import { useQuery } from 'hooks';
import './index.scss';

const NavbarItem = ({ name }) => {
  const query = useQuery();
  const sectionQuery = query.get('section') || 'home';
  const itemClass = name.toLowerCase().trim().split(' ').join('-');
  const activeClass = sectionQuery === itemClass ? 'active' : '';
  
  return <li className={activeClass}>{name}</li>;
};

NavbarItem.propTypes = {
  name: PropTypes.string
}
export default NavbarItem;
