import {AiFillMessage} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import data from '../sponsor_details_data'
import Sponsor_details from './Sponsor_details'

const Sponsor_comp = ({ name, info, image,domain, price}) => {
    const[id,setId] = useState("")

    function handleClick(){
        
    }

  return (
    <div className='flex flex-wrap items-center justify-center'>
        
        <section >
            <div className='max-h-[300px] w-full p-4 flex'>
                <div>
                    <img className='max-w-[300px] rounded-md shadow-md hover:scale-105 transition duration-500' src={image} alt="" />
                </div>

                <div className='max-w-[500px] ml-6' >
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">Comapny's Name</h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
                    <p>{info.substring(0,100)}....</p>

                    <div className="flex mt-2">
                        <span className="mr-3">Domain:</span>
                        <span className='font-bold'>{domain}</span>
                    </div>
                </div>
                
                  
                <div className='flex flex-col ml-8'>
                    <div className='flex flex-col'>
                        <span>Sponsorship Offers upto</span>
                         <span className="title-font font-medium text-2xl text-gray-900">₹{price}</span>
                    </div>
                    <div className='flex'>
                        <Link to="/sponsors_details">
                            <button onClick={handleClick} className="flex h-[40px] mt-3 ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">View Details</button>                        
                        </Link>
                        <button className="rounded-full mt-3 w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
        </section>
     
    </div>
  )
}

export default Sponsor_comp
