import React from 'react'
import Features from '../components/Features'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Main_img from '../assets/dashboar_main_2.png'

const Dashboard = () => {
  return (
    <div>
      
<main className="relative h-full overflow-hidden  bg-slate-900 pb-6">
    <header className="z-30 flex items-center w-full h-24 sm:h-32">
        <div className="container flex items-center justify-between px-6 mx-auto">
            <div className="text-xl font-black text-gray-800 dark:text-white">
              Events and Sponsors for Successful Partnerships
            </div>
        </div>
    </header>
     
    <div className="relative z-20 flex items-center overflow-hidden  bg-slate-900">
        <div className="container relative flex px-6 py-4 mx-auto">
            <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
                <h1 className="flex flex-col text-8xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-3xl dark:text-white">
                    Want OR Provide
                    <span className="text-5xl sm:text-6xl">
                      Sponsorship ?
                    </span>
                </h1>
                <p className="text-sm text-gray-700 sm:text-base dark:text-white mt-4">
                Leave it to us to identify an appropriate sponsor or event to advertise your business, reducing your time in the process.
                </p>
                <div className="flex mt-8">
                    <Link to="/sponsors" className="px-4 py-2 mr-4 text-white uppercase border-pink-500 border-2  rounded-lg text-md hover:bg-pink-400">
                        Get Sponsors
                    </Link>
                    <Link to="/organizers" className="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md">
                        Become a Sponsor
                    </Link>
                </div>
            </div>
            <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5"> 
                <img src={Main_img} className="max-w-[30px] m-auto md:max-w-[200px] rounded-md"/>
            </div>
        </div>
    </div>

</main>
    <svg viewBox="0 0 1446 199" focusable="false" class="chakra-icon css-1w3t3sf" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M -6 68.5 V 0 H 1445 V 91 L 1289 170 L -6 68.5 Z" fill="#02042B"></path>
    </svg>
    <div className='w-screen text-center font-bold text-2xl '>What We Provide</div>
    <Features/>
    <Footer/>

    </div>
  )
}

export default Dashboard