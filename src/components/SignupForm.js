import React from 'react';
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
import { useState } from 'react';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const[formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:""
    })

    function changeHandler(event){

        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [accountType, setAccountType] = useState("student")

    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmpassword){
            toast.error("Passwords do not matched");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account created");
        const accountData ={
            ...formData
        };

        const finalData ={
            ...accountData,
            accountType
        }

        console.log("Printing final account data");
        console.log(finalData);

        navigate("/dashboard");
    }

  return (
    <div>
      {/* student-instructor tab */}
      <div className="flex w-full bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
        className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-2 rounded-full transition-all duration-200`}
        onClick={()=>{
            setAccountType("student")
        }} >
            Student
        </button>
        <button
        className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-2 rounded-full transition-all duration-200`}
         onClick={()=>{
            setAccountType("instructor")
        }}>
            Instructor
        </button>
      </div>

    <form onSubmit={submitHandler}>

        {/* firstname and lastname */}
        <div className="flex w-full gap-x-4 mt-4">

            <label className="w-full mt-4">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-3">First Name<sup className="text-pink-200">*</sup></p>
                <input
                    required
                    type="text"
                    name="firstname"
                    onChange={changeHandler}
                    placeholder="Enter first name"
                    value={formData.firstname}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
            </label>

            <label className="w-full mt-4">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-3">Last Name<sup className="text-pink-200">*</sup></p>
                <input
                    required
                    type="text"
                    name="lastname"
                    onChange={changeHandler}
                    placeholder="Enter last name"
                    value={formData.lastname}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
            </label>
        </div>
        {/* Email address */}
        <label className="w-full mt-4">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-3">Email Id<sup className="text-pink-200">*</sup></p>
            <input
                required
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder="Enter your email"
                value={formData.email}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
        </label>

        {/* createpassword and confirm password */}
        <div className="flex w-full gap-x-4 ">
        <label className="relative w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-3">Create Password<sup className="text-pink-200">*</sup></p>
            <input
                required
                type={showPassword ? ("text"):("password")}
                name="password"
                onChange={changeHandler}
                placeholder="Enter password"
                value={formData.password}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
            <span className="absolute right-3 top-[50px] cursor-pointer" onClick={()=> setShowPassword((prev)=> !prev)}>
                {showPassword? (<AiFillEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiFillEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
        </label>

        <label className="relative w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-3">Confirm Password<sup className="text-pink-200">*</sup></p>
            <input
                required
                type={showConfirmPassword ? ("text"):("password")}
                name="confirmpassword"
                onChange={changeHandler}
                placeholder="confirm password"
                value={formData.confirmpassword}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
            <span className="absolute right-3 top-[50px] cursor-pointer" onClick={()=> setShowConfirmPassword((prev)=> !prev)}>
                {showConfirmPassword? (<AiFillEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiFillEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
        </label>
        </div>

        <button className=" w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
            Create Account
        </button>
    </form>

    </div>
  )
}

export default SignupForm
