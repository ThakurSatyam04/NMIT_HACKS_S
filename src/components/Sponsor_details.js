import React from 'react';
import { Link } from 'react-router-dom';

const Sponsor_details = () => {

  return (
    <div>
        <div className='mt-4 ml-4'>
            <Link to="/sponsor_form">
                <button className='border border-black bg-blue-400'>I'm Sponsor</button>            
            </Link>
        </div>
      {/* <img src={itemData.image} alt="" /> */}
    </div>
  )
}

export default Sponsor_details
