// Common things in Login and Logout pages
import React from 'react';
import frameImg from "../assets/frame.png";
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {FcGoogle} from "react-icons/fc";

const Templet = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (

    
    <div className="flex justify-between w-screen max-w-screen py-12 mx-auto gap-y-0 floating bg-[#f0e3e3]">

      <div className="relative w-11/12 max-w-[450px] mt-4 hidden sm:block ml-20 ">
        {/* <img src={frameImg} alt="frame" width={558} height={504}/> */}
        <img className="absolute -top-4 right-4 shadow-2xl rounded-md" src={image} alt="image" width={558} height={290} />
      </div>

      <div className="w-11/12 max-w-[450px] mx-20 bg-[#9c8d8d] p-4 rounded-md shadow-md mt-2">
        <h1 className="text-richblack-500 font-semibold text-[1.875rem] leading-[2.375rem] underline">
            {title}
        </h1 >
        {/* <p className="text-[1.125rem] leading-[1.625rem mt-4">
            <span className="text-richblack-100">{desc1}</span><br/>
            <span className="text-blue-100 italic">{desc2}</span>
        </p> */}
        {formtype==="signup" ?
        (<SignupForm setIsLoggedIn = {setIsLoggedIn}/>):
        (<LoginForm setIsLoggedIn = {setIsLoggedIn}/>)}

        <div className="flex w-full items-center my-4 gap-x-2">
            <div className="w-full h-[1px] bg-richblack-700"></div>
            <div className="text-richblack-700 font-medium leading[1.375rem]">OR</div>
            <div className="w-full h-[1px] bg-richblack-700"></div>
        </div>
        <button className="w-full flex justify-center items-center rounded-[8px] font-medium  border border-rich-black-700 px-[12px] py-[8px] gap-x-2 mt-4 bg-blue-400">
            <FcGoogle/>
            SignUp with Google
        </button>
      </div>

     

    </div>
  )
}

export default Templet
