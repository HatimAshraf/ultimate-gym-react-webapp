import React from 'react';

const SectionWrapper = ({ children, header, title }) => {
  return (
    <section className='min-h-screen flex flex-col gap-10'>
      <div className='bg-emerald-950 py-10 flex flex-col gap-2 justify-center items-center '>
        <p className='uppercase font-light'>{header}</p>
        <h2 className='font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center'>
          {title[0]}
          <span className='uppercase text-emerald-500'>{title[1]}</span>
          {title[2]}
        </h2>
      </div>
      <div className='max-w-[800px] w-full flex flex-col mx-auto gap-10'>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
