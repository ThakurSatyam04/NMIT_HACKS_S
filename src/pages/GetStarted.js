import React from 'react'
import GetStarted_component from '../components/GetStarted_component'

const GetStarted = () => {
  return (
    <div className='bg-[#f0e3e3]'>
        <div className='w-screen text-center pt-20'>
            <h1 className='text-3xl font-semibold'>Let's get started!</h1>
            <h1 className='text-3xl font-semibold'>First, how are you involved in events?</h1>
        </div>
        <div className='flex'>
            <div className='w-screen flex items-center justify-center'>
                <GetStarted_component/>
            </div>
        </div>
    </div>
  )
}

export default GetStarted
