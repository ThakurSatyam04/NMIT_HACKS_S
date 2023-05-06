import React from 'react';
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
import { useState } from 'react';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState("");

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
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const [accountType, setAccountType] = useState("student")

    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmpassword){
            toast.error("Passwords do not matched");
            return;
        }

        setTimeout(() => {
            if (!formData.email || !formData.password || !formData.firstname || !formData.lastname || !formData.confirmpassword || !formData.password) {
              setErrorMsg("");  
              return;
            }
            setErrorMsg("");
          }, 2000);

        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then(async (res) => {
            setSubmitButtonDisabled(false); 
            const user = res.user;
            await updateProfile(user,{
                displayName:formData.firstname,
            });
            setIsLoggedIn(true);
            toast.success("Account is Created")
            navigate("/dashboard");
        })
        .catch((error) => {
            setSubmitButtonDisabled(false);
            console.log("error - ", error);
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
    <div>

    <form onSubmit={submitHandler}>

        {/* firstname and lastname */}
        <div className="flex w-full gap-x-4">

            <label className="w-full mt-4">
                <p className="text-[0.875rem] font-semibold mb-1 leading-[1.375rem] mt-3">First Name<sup className="text-pink-200">*</sup></p>
                <input
                    required
                    type="text"
                    name="firstname"
                    onChange={changeHandler}
                    placeholder="Enter first name"
                    value={formData.firstname}
                    className="bg-gray-200 rounded-[0.5rem] w-full p-[12px]"
                    onKeyDown={handleKeyPress}
                />
            </label>

            <label className="w-full mt-4">
                <p className="text-[0.875rem] font-semibold mb-1 leading-[1.375rem] mt-3">Last Name<sup className="text-pink-200">*</sup></p>
                <input
                    required
                    type="text"
                    name="lastname"
                    onChange={changeHandler}
                    placeholder="Enter last name"
                    value={formData.lastname}
                    className="bg-gray-200 rounded-[0.5rem] w-full p-[12px]"
                    onKeyDown={handleKeyPress}
                />
            </label>
        </div>
        {/* Email address */}
        <label className="w-full mt-4">
            <p className="text-[0.875rem] font-semibold mb-1 leading-[1.375rem] mt-3">Email Id<sup className="text-pink-200">*</sup></p>
            <input
                required
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder="Enter your email"
                value={formData.email}
                className="bg-gray-200 rounded-[0.5rem] w-full p-[12px]"
                onKeyDown={handleKeyPress}
            />
        </label>

        {/* createpassword and confirm password */}
        <div className="flex w-full gap-x-4 ">
        <label className="relative w-full">
            <p className="text-[0.875rem] font-semibold mb-1 leading-[1.375rem] mt-3">Create Password<sup className="text-pink-200">*</sup></p>
            <input
                required
                type={showPassword ? ("text"):("password")}
                name="password"
                onChange={changeHandler}
                placeholder="Enter password"
                value={formData.password}
                className="bg-gray-200 rounded-[0.5rem] w-full p-[12px]"
                onKeyDown={handleKeyPress}
            />
            <span className="absolute right-3 top-[50px] cursor-pointer" onClick={()=> setShowPassword((prev)=> !prev)}>
                {showPassword? (<AiFillEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiFillEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
        </label>

        <label className="relative w-full">
            <p className="text-[0.875rem] font-semibold mb-1 leading-[1.375rem] mt-3">Confirm Password<sup className="text-pink-200">*</sup></p>
            <input
                required
                type={showConfirmPassword ? ("text"):("password")}
                name="confirmpassword"
                onChange={changeHandler}
                placeholder="confirm password"
                value={formData.confirmpassword}
                className="bg-gray-200 rounded-[0.5rem] w-full p-[12px]"
                onKeyDown={handleKeyPress}
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
