import React from 'react'
import Templet from '../components/Templet'
import signupImg from '../assets/login_img.png'

const SignUp = ({setIsLoggedIn}) => {
  return (
    <Templet
    image = {signupImg}
    formtype = "signup"
    setIsLoggedIn = {setIsLoggedIn}    
    />
  )
}

export default SignUp
