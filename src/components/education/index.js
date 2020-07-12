import React from 'react';
import config from 'config';
import EducationItem from './education-item';

import './index.scss';

const EDUCATIONS = config.educations;

const Education = () => {
  const renderItems = () => (
    EDUCATIONS.map(item => 
      <EducationItem item={item} key={item.agency} />
    )
  )

  return (
    <div className='section education'>
      <h1 className='education__title'>Education</h1>
      <div className='items'>
        {renderItems()}
      </div>
    </div>
  )
}

export default Education;