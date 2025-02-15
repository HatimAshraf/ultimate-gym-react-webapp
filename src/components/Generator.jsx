import SectionWrapper from './SectionWrapper';
import Header from './Header';
import { SCHEMES, WORKOUTS } from '../utils/data.js';
import { useState } from 'react';

const Generator = () => {
  const [dropdownModal, setdropdownModal] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState('individual');
  const [selectedMuscles, setSelectedMuscles] = useState([]);
  const [selectedGoals, setSelectedGoals] = useState('strength_power');

  const handleDropdownMenu = () => {
    setdropdownModal(!dropdownModal);
  };
  return (
    <SectionWrapper
      header={"Let's Hulkify Your Workout"}
      title={['The clock says ', "It's", ' Hulk Mode']}
    >
      <Header
        index={'01'}
        title={'Pick your exercise'}
        description={'Select the Workout'}
      />
      <div className='grid grid-cols-3 sm:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setSelectedWorkout(type);
                // setdropdownModal(false);
              }}
              className={
                'bg-emerald-950 rounded-md p-4 ' +
                (type === selectedWorkout ? 'border border-emerald-400' : '')
              }
              key={typeIndex}
            >
              {type.replaceAll('_', ' ')}
            </button>
          );
        })}
      </div>
      <Header
        index={'02'}
        title={'Lock on targets'}
        description={'Select the Muscles judged for annihilation'}
      />
      <div className='bg-emerald-950 border border-solid border-emerald-400 rounded-md flex flex-col'>
        <div
          onClick={handleDropdownMenu}
          className='relative flex items-center justify-center py-4'
        >
          <p>Select muscle groups</p>
          <i className='fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2'></i>
        </div>
        {dropdownModal && (
          <div className='flex flex-col px-3 pb-3'>
            {(selectedWorkout === 'individual'
              ? WORKOUTS[selectedWorkout]
              : Object.keys(WORKOUTS[selectedWorkout])).map(muscles,musclesindex) =>{
                
              }}
          </div>
        )}
      </div>
      <Header
        index={'03'}
        title={'Become juggernaut'}
        description={'Select your ultimate objective.'}
      />
      <div className='grid grid-cols-3 gap-4'>
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setSelectedGoals(scheme);
                // setdropdownModal(false);
              }}
              className={
                'bg-emerald-950 rounded-md p-4 ' +
                (scheme === selectedGoals ? 'border border-emerald-400' : '')
              }
              key={schemeIndex}
            >
              {scheme.replaceAll('_', ' ')}
            </button>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Generator;
