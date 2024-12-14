import Generator from './components/Generator';
import Hero from './components/Hero';
import { Workout } from './components/Workout';

const App = () => {
  return (
    <main className='text-white text-sm sm:text-base min-h-screen flex flex-col bg-gradient-to-r from-emerald-900  to-emerald-950'>
      <Hero />
      <Generator />
      <Workout />
    </main>
  );
};

export default App;
