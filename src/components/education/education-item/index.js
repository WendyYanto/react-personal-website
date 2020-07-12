import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const EducationItem = ({ item, index }) => {
  const direction = index % 2 === 0 ? 'right' : 'left';
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
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default EducationItem;