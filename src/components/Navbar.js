import React from 'react';
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";
import Logo from '../assets/site_logo.svg'

const Navbar = (props) => {
let isLoggedIn = props.isLoggedIn;
let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-screen bg-[#100f0f] py-2 mx-auto pl-8 pr-8'>
      <Link className='flex' to="/">
       <img className='w-[50px] bg-white rounded-full mr-3' src={Logo} alt="" />
       <h1 className='text-white font-semibold text-3xl'>SponsorNexus</h1> 
      </Link>

      {/* <nav>
        <ul className='text-richblack-100 flex gap-x-6'>
            <Link to="/">Home</Link>
            <li src="#">About</li>
            <li src="#">Contact</li>
        </ul>
      </nav> */}

    {/* Login, SignUp, Logout, Dashboard */}
      <div className='flex items-center gap-x-4'>
        {   !isLoggedIn &&
            <Link to="/login">
                <button className="bg-richblack-800  text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                    Login
                </button>
            </Link>
        }
        { isLoggedIn &&
            <Link to="/getstarted">
                <button className="bg-richblack-800  text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                    Get Started
                </button>
            </Link>
        }
        { isLoggedIn &&
            <Link to="/login">
                <button className="bg-richblack-800  text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={()=>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out");
                }}>
                    Logout
                </button>
            </Link>
        }
        
        { ! isLoggedIn &&
            <Link to="/signup">
                <button className="bg-richblack-800  text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                    Sign Up
                </button>
            </Link>
        }
      </div>
    </div>
  )
}

export default Navbar
