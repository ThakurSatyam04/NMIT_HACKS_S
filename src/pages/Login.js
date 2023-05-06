import React from 'react'
import Templet from '../components/Templet';
import loginImg from '../assets/login_img.png';

const Login = ({setIsLoggedIn}) => {
  return (
    <Templet
      title="Welcome Back"
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
