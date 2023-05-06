import React from 'react'
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {toast} from "react-hot-toast";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const LoginForm = ({setIsLoggedIn}) => {  

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        email:"",
        password:""
    })

    const [errorMsg, setErrorMsg] = useState("");

    const[showPassword , setShowPassword] = useState(false);

    function changeHandler(event){

        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setTimeout(() => {
            if (!formData.email || !formData.password) {
              setErrorMsg("");  
              return;
            }
            setErrorMsg("");
          }, 2000);
      
          signInWithEmailAndPassword(auth, formData.email, formData.password)
          .then((res) => { 
              // const user = res.user;
              setIsLoggedIn(true);
              toast.success("logged In")
              navigate("/dashboard")
          })
          .catch((error) => {
          setErrorMsg(formData.error);
          });
        } 
      
        const handleKeyPress = (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            submitHandler(e);
          }
        };
      

  return (
   <form onSubmit={submitHandler}
   className="flex flex-col w-fullgap-y-4 mt-6 ">

    <label className="w-full">
        <p className="text-[0.875rem] font-semibold mb-1 leading-[1.375rem]">Email Id<sup className="text-pink-200">*</sup></p>
        <input
            required 
            type="email" 
            value = {formData.email} 
            onChange={changeHandler} 
            placeholder="Enter your email"
            name="email"
            className="bg-gray-200 rounded-[0.5rem] w-full p-[12px]"
            onKeyDown={handleKeyPress}
        />
    </label>

    <label className="w-full relative">
        <p className="text-[0.875rem] font-semibold mb-1 leading-[1.375rem] mt-3">Password<sup className="text-pink-200">*</sup></p>
        <input
            required 
            type={showPassword?("text"):("password")} 
            value = {formData.password} 
            onChange={changeHandler} 
            placeholder="Password"
            name = "password"
            className="bg-gray-200 rounded-[0.5rem] w-full p-[12px]"
            onKeyDown={handleKeyPress}
        />

            <span className="absolute right-3 top-[50px] cursor-pointer" onClick={()=> setShowPassword((prev)=>!prev)}>
                {showPassword ? (<AiFillEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiFillEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#" >
                <p className="text-xs mt-1 font-semibold max-w-max ml-auto">
                    Forgot Password
                </p>
            </Link>
    </label>

            <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
                Sign In
            </button>   
   </form>
  )
}

export default LoginForm
