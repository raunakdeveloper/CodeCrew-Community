import React from 'react';

const Dashboard = () => {
  return (
    <div className='flex flex-col mt-14 items-center text-white h-[500px]'>
      <div className='text-3xl md:text-5xl font-semibold'>
        Welcome to <span className='text-[#ffd726]'>CodeCrew</span>
      </div>
      <p className='text-base md:text-2xl mt-3'>
        Empowering coders for a better tomorrow.
      </p>
    </div>
  );
};

export default Dashboard;
