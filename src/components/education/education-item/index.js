import React from 'react';
import { object, number, bool } from 'prop-types'
import withResponsive from 'hocs/with-responsive'
import './index.scss';

const EducationItem = ({ item, index, isMobile }) => {
  const direction = index % 2 === 0 && !isMobile ? 'right' : 'left';
  const className = `education-item ${direction}`;

  return (
    <div className={className}>
      <div className='dot' />
      <h3>{item.agency}</h3>
      <p>{item.duration}</p>
      <p>{item.major}</p>
      <p>{item.notes}</p>
    </div>
  )
}

EducationItem.propTypes = {
  item: object.isRequired,
  index: number.isRequired,
  isMobile: bool.isRequired
};

export default withResponsive(EducationItem);