import React from 'react';
import ExerciseCard from './ExerciseCard';
import SectionWrapper from './SectionWrapper';

const Workout = (props) => {
  const { workout } = props;
  return (
    <SectionWrapper
      id={'workout'}
      header={'welcome to'}
      title={['The', 'DANGER', 'zone']}
    >
      <div className='flex flex-col gap-4'>
        {workout.map((exercise, i) => {
          return <ExerciseCard i={i} exercise={exercise} key={i} />;
        })}
      </div>
    </SectionWrapper>
  );
};

export default Workout;
