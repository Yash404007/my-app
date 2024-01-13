import React from 'react';
import Left from '../components/Home/Left';
import Right from '../components/Home/Right';
import Navbar1 from '../components/Layout/Navbar';


const Home = () => {
  return (
    <div className='relative h-[100vw] md:h-[47.5vw] w-[100vw]'>
      <style>
        {`
          @keyframes Gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom right, transparent, rgba(0, 0, 0, 0), transparent)',
          backgroundSize: '200% 200%',
          animation: 'Gradient 3s ease infinite'
        }}
      />
      <div
        className='h-full w-full'
        style={{
          background: 'linear-gradient(to bottom right, #003366, #006699, #0099cc)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className='w-[100vw] px-3 py-1'>
        <Navbar1 className='w-full'/>
        </div>
        <div className='flex justify-between flex-row h-full'>
          <div className='py-12 px-15 md:py-16 md:px-16'>
            <Left />
          </div>
          <Right />
        </div>
      </div>
    </div>
  );
};

export default Home;
