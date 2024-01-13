import { Button } from '@material-tailwind/react'
import React from 'react'

const Left = () => {
  return (
    <div>
        <div className='flex flex-col '>
            <div className='text-[4.5vw] leading-[5.5vw]'>
                <span className='text-white' >
                Get Your 
                </span>
                <div>
                    <span className='text-yellow-800'>Finances</span> <span className='text-white'>Under</span>
                </div>
                <span className='text-white'>
                        Control
                </span>
                <div className='text-white text-[1.25vw] space-x-8'>
                    Track your Money You spend on friends & Brands
                </div>
            </div>
            <Button color='amber' className='rounded-none w-[15vw] my-[2vw] rounded-[0.5vw] text-[1.3vw] transition duration-600 transform
            hover:text-[1.5vw] hover:bg-opacity-[80%] hover:scale-105'>
                Get Started
            </Button>
        </div>
    </div>
  )
}

export default Left