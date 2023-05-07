import React from 'react';
import { Link, useParams } from 'react-router-dom';
import datas from '../sponsor_details_data';
import {MdOutlineLocationOn} from 'react-icons/md'
import {FaHashtag} from 'react-icons/fa'
import Footer from '../components/Footer'
import SponsorForm2 from '../pages/SponsorForm2';
import bg from '../assets/sponsor_dummi_img.jpg'

const Sponsor_details = () => {
    const {id} = useParams()
    const details = datas.filter((data)=>{
        return data.id == id
    })
  return (
    <div>

        {/* Hero section */}
       <div className='w-screen'>
        <div class=" bg-cover bg-center bg-no-repeat h-screen relative">
            <div class="h-full w-full absolute top-0 left-0 bg-center bg-cover filter brightness-50" style={{backgroundImage: `url(${bg})`}}></div>
            <div class="h-full w-full absolute top-0 left-0 flex items-center justify-center flex-col">
            <h1 class="text-white text-6xl">{details[0].Company_name}</h1>
            </div>
        </div>
        <div className='h-[150px] bg-richblack-900 flex items-center justify-evenly'>
            <div className='flex'>
            <MdOutlineLocationOn className='text-4xl text-white'/>
            <p className='text-white ml-4 text-2xl'>{details[0].company_location}</p>
            </div>
            <div className='flex'>
            <FaHashtag className='text-4xl text-white'/>
            <p className='text-white ml-4 text-2xl'>{details[0].company_type}</p>
            </div>  
        </div>
       </div>

       {/* After Company */}
       <div className='flex items-center justify-center mb-20'>
            <div className=''>
                <img className=' h-[300px]' src={details[0].image}/>
            </div>
            <div className='w-1/2 ml-4 '>
                <h1 className='text-3xl mt-10'>ABOUT OUR COMPANY</h1>
                <div className='h-[2px] bg-green-600 w-[100px] rounded-md mt-2'></div>
                <p className='mt-4 font-semibold'>"{details[0].TagLine}"</p>
                <p className='mt-4'>{details[0].company_description}</p><br /><hr /><hr />
                <div className='mt-4 flex'>
                    <p className='font-semibold mr-2'>Sponsorship Type :</p>
                    <p className='font-bold mr-4'>{details[0].sponsorship_type}</p>
                </div>
                <div className='mt-4 flex'>
                    <p className='font-semibold mr-2'>Company Size :</p>
                    <p className='font-bold mr-4'>{details[0].company_size}</p>
                </div>
                <div className='mt-4 flex'>
                    <p className='font-semibold mr-2'>Expectations:</p>
                    <p className='font-bold mr-4'>{details[0].expectation}</p>
                </div>
                <div className='mt-4 flex'>
                    <p className='font-semibold mr-2'>Email :</p>
                    <p className=' mr-4'>{details[0].email}</p>
                </div>
            </div>
       </div><hr />
        <div className='w-screen flex items-center justify-center '>
         <SponsorForm2/>
        </div>

        
       <Footer/>

    </div>
  )
}

export default Sponsor_details
