import React from 'react';
import { object, number } from 'prop-types'
import { isMobileOnly } from 'react-device-detect';

import './index.scss';

const EducationItem = ({ item, index }) => {
  const direction = index % 2 === 0 && !isMobileOnly ? 'right' : 'left';
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
  index: number.isRequired
};

export default EducationItem;