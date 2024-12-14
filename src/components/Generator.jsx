import React from 'react';
import SectionWrapper from './SectionWrapper';
import Header from './Header';

const Generator = () => {
  return (
    <SectionWrapper
      header={"Let's Hulkify Your Workout"}
      title={['The clock says ', "It's Hulk ", 'Mode']}
    >
      <Header
        index={'01'}
        title={'Pick your exercise'}
        description={'Select the Workout'}
      />
    </SectionWrapper>
  );
};

export default Generator;
