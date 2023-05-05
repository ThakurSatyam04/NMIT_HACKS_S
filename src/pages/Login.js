import React from 'react'
import Templet from '../components/Templet';
import loginImg from '../assets/login.png';

const Login = ({setIsLoggedIn}) => {
  return (
    <Templet
      title="Welcome Back"
      desc1="Build Skills for Today, Tommorow and Beyond."
      desc2="Education for your future-proof career."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
