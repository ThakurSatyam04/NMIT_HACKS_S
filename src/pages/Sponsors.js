import React from 'react'
import Sponsor_comp from '../components/Sponsor_comp'
import Dropdown from '../components/Dropdown'
import { getDatabase, ref, onValue} from "firebase/database";
import  { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';


const Sponsors = ({users}) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Initialize Firebase with your project's configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDWxL8rtcrXX2gnsv_SLEsyO_IMDxK1LIY",
        authDomain: "sponsorform-e9033.firebaseapp.com",
        projectId: "sponsorform-e9033",
        storageBucket: "sponsorform-e9033.appspot.com",
        messagingSenderId: "992429182730",
        appId: "1:992429182730:web:0d80831eae4704740af4f3"
    };
    firebase.initializeApp(firebaseConfig);

    // Load the data from your Firebase Realtime Database
    const database = firebase.database();
    const ref = database.ref('path/to/data');
    ref.on('value', snapshot => {
      setData(snapshot.val());
    });

    // Unsubscribe from the data when the component unmounts
    return () => {
      ref.off('value');
    };
  }, []);


  return (
    <div>
      <div className='w-screen text-center text-3xl font-bold' > 
        Sponsors Page
      </div>
      
      <div className='w-screen m-4 flex '>
        <div>F
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
