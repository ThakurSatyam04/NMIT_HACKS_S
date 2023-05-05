import React from 'react'
import Templet from '../components/Templet'
import signupImg from '../assets/signup.png'

const SignUp = ({setIsLoggedIn}) => {
  return (
    <Templet
    title="Join the million learning to code with StudyNotion for free"
    desc1 = "Build skills for Today , Tommorow and Beyond"
    desc2 = "Education to future proof career"
    image = {signupImg}
    formtype = "signup"
    setIsLoggedIn = {setIsLoggedIn}    
    />
  )
}

export default SignUp
