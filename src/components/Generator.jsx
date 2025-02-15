import SectionWrapper from './SectionWrapper';
import Header from './Header';
import { WORKOUTS } from '../utils/swoldier';

const Generator = () => {
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
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
        {Object.keys(WORKOUTS).map((type, typeindex) => {
          return (
            <button
              className='border-[2px] border-solid border-emerald-600 hover:border-emerald-200 rounded-md p-4'
              key={typeindex}
            >
              {type.replaceAll('_', ' ')}
            </button>
          ); 
        })}
      </div>
    </SectionWrapper>
  );
};

export default Generator;
