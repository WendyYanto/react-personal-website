import React from "react";
import { useQuery } from 'hooks';
import './index.css';

const NavbarItem = ({ name }) => {
  const query = useQuery();
  const sectionQuery = query.get('section') || '';
  const itemClass = name.toLowerCase().trim().split(' ').join('-');
  const isActive = sectionQuery === itemClass;
  const activeClass = isActive ? 'active' : '';
  
  return (<li className={activeClass}>{name}</li>);
};

export default NavbarItem;
