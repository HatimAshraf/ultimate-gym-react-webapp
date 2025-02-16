import Button from './Button';
const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-10 text-center max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-2'>
        <p className='uppercase'>Kickstart Your's</p>
        <h1 className='uppercase text-4xl sm:text-5xl md:text-6xl tracking-widest font-semibold'>
          <span className='text-emerald-500'>Hulk</span>Mode
        </h1>
      </div>
      <p className='text-sm md:text-base font-light'>
        I fully accept the possibility of transforming into an imposing,
        larger-than-life figure. I acknowledge the risks of becoming a{' '}
        <span className='text-emerald-500 font-medium'>
          local mass monstrosity
        </span>
        , potentially dealing with body dysmorphia, and the challenge of fitting
        through standard doorways.
        <span className='text-emerald-500 font-medium'>
          The journey to unlocking Hulk-level strength
        </span>{' '}
        comes with great power—and even bigger muscles!
      </p>
      {/* <button className='px-8 py-4 rounded-md border-[2px] border-emerald-600 border-solid emeraldShadow duration-200'>
        <p>Accept and Continue</p>
      </button> */}
      <Button
        func={() => {
          window.location.href = '#gene';
        }}
        text={'Accept & Begin'}
      ></Button>
    </div>
  );
};

export default Hero;
