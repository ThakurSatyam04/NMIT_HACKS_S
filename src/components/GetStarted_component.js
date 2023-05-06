import React from 'react'
import img1 from '../assets/get_started_right_img2.svg'
import img2 from '../assets/get_started_right_img.svg'
import { Link } from 'react-router-dom'

const GetStarted_component = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">

  <div class="container px-5 py-24 mx-auto ">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={img1}/>
        </div>
        <div className='flex w-full items-center justify-center flex-col'>
            <h2 class="title-font text-2xl w-[300px]  text-gray-900 mt-6 mb-3">I'M INTERESTED IN SPONSORING EVENTS</h2>
            <p class="leading-relaxed text-base w-[350px]">Discover events and get in contact instantly with the organizer</p>
        </div>
        <Link to='/sponsorForm'>
            <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Sponsor Events</button>
        </Link>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={img2}/>
        </div>
        <div className='flex w-full items-center justify-center flex-col'>
            <h2 class="title-font text-2xl w-[200px]  text-gray-900 mt-6 mb-3">I'M ORGANIZING AN EVENT</h2>
            <p class="leading-relaxed text-base w-[350px]">Create your event profile and show the sponsors what you have to offer</p>
            
        </div>
        <Link to='/organizerForm'>
            <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Create Events</button>
        </Link>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default GetStarted_component
