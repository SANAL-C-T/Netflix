
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='absolute w-full p-4 flex items-center justify-between z-50'>
      <Link to="/">
        <h1 className='uppercase text-red-600 font-nsans-Bold cursor-pointer text-5xl'>
          netflix
        </h1>
      </Link>




<div>

<select className='capitalize pl-4 mr-9 bg-black px-6 py-2  border border-white'>
        <option value="ENGLISH">English</option>
        <option value="HINDI">Hindi</option>
      </select>


  <Link to="Signup">
  <button className='capitalize pr-4 bg-red-600 px-6 py-2 rounded-cursor-pointer'>Sign in</button>
  </Link>
  
</div>

    </div>
  );
}

export default Navbar;
