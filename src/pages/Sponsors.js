import React from 'react'
import Sponsor_comp from '../components/Sponsor_comp'
import Dropdown from '../components/Dropdown'
import { getDatabase, ref, onValue} from "firebase/database";
import  { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';


const Sponsors = ({users}) => {

  return (
    <div>
      <div className='w-screen text-center text-3xl font-bold' > 
        Sponsors Page
      </div>
      
      <div className='w-screen m-4 flex '>
        <div>
            <input type="text" placeholder='search you sponser here' className='w-[200px] rounded-md pl-2 border-black border '/>
        </div>
        <div className='mt-4'>
          <Dropdown users = {users}/>
        </div>
      </div>

      <div className='mt-4'>
        {
              users.map( (user) => {
                return <Sponsor_comp key={user.id} {...user}/>
              })
          }
      </div>
    </div>
  )
}

export default Sponsors
