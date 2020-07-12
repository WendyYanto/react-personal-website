import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const EducationItem = ({ item }) => (
  <div className='education-item'>
    <h3>{item.agency}</h3>
    <p>{item.duration}</p>
    <p>{item.major}</p>
    <p>{item.notes}</p>
  </div>
)

EducationItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default EducationItem;