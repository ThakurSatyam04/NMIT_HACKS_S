
import {Route, Routes} from "react-router-dom";
import {useState,useEffect} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { auth } from "./firebase";
import Sponsors from "./pages/Sponsors";
import data from './sponsor_card_data'
import Sponsor_details from "./components/Sponsor_details";
import SponsorForm from "./pages/SponsorForm";
import GetStarted from "./pages/GetStarted";
import OrganizerForm from "./pages/OrganizerForm";
import Sponsor_form from './components/Sponsor_form'

function App() {

  const [isLoggedIn , setIsLoggedIn]= useState(false);
  const [userName , setUserName] = useState("");
  const [users, setUser] = useState(data);
  // console.log({users});

  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      if(user){
        setUserName(user.displayName)
      }
      else{
        setUserName("");
      }
    })
  })
  // bg-[#f0e3e3]
  return (
    <div className="w-full h-screen  flex-col">
      <Navbar  isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

      <Route path="/" element = {<Dashboard isLoggedIn={isLoggedIn}/>}/>
      <Route path="/login" element = {<Login setIsLoggedIn = {setIsLoggedIn}/>}/>
      <Route path="/signup" element = {<Signup setIsLoggedIn = {setIsLoggedIn}/>}/>
      <Route path="/getstarted" element = {<GetStarted setIsLoggedIn = {setIsLoggedIn}/>}/>
      <Route path="/sponsorForm" element = {<Sponsor_form setIsLoggedIn = {setIsLoggedIn}/>}/>
      <Route path="/organizerForm" element = {<OrganizerForm setIsLoggedIn = {setIsLoggedIn}/>}/>
      <Route path="/sponsors" element = {<Sponsors setIsLoggedIn = {setIsLoggedIn} users={users}/>}/>
      <Route path="/sponsors_details/:id" element = {<Sponsor_details setIsLoggedIn = {setIsLoggedIn} users={users}/>}/>
      <Route path="/sponsor_form" element = {<SponsorForm setIsLoggedIn = {setIsLoggedIn}/>}/>
      <Route path="/dashboard" element = {
      <PrivateRoute isLoggedIn={isLoggedIn}>
        <Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn = {setIsLoggedIn} name={userName}/>
      // </PrivateRoute>
      }/>
      
      </Routes>

    </div>
  )
}

export default App;
