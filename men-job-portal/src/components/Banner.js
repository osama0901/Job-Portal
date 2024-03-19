import React, { useState } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";

const Banner = ({ query, handleInputChange }) => {
  return (
    <div className='bg-sky-500 mx-auto xl:px-24 px-10 md:py-20 py-14 '>
      <h1 className='text-6xl font-sans  text-white mb-10'>
        Find Your<span className="text-white"> New Job Today.</span>
      </h1>
      <p className='text-lg text-white '>We Can Help You Succeed</p>
      <p className='text-lg text-white mb-8'>Browse Thousands Of Jobs From Top Companies</p> 
      <form>
        <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-8 '>
          <div className='bg-white flex md:rounded-s-md rounded shawdow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full'>
            <input
              type="text"
              name="title"
              placeholder='Job Title, Skills or Comapny'
              id="title"
              className='block flex-1 border-0 bg-transparent py-3 pl-10 text-grey-900 placeholder:text-gray-400 focus=right-0 sm:text-sm sm:leading-6'
              onChange={handleInputChange}
              value={query}
            />
            <FiSearch className='absolute mt-2.5 ml-2 text-gray-400' />
          </div>
          <div className='bg-white flex md:rounded-s-none rounded shawdow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full hover:pointer'>
            <input
              type="text"
              name="title"
              placeholder='Location'
              id="title"
              className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-grey-900 placeholder:text-gray-400 focus=right-0 sm:text-sm sm:leading-6'
              
              
            />
            <FiMapPin className='absolute mt-2.5 ml-2 text-gray-400' />
          </div>

          <button type='submit'  className='bg-yellow-400 py-2 px-8 text-white md:rounded-s-none rounded hover:bg-white hover:text-black '>Search</button>
        </div>
      </form>
    </div>
  );
};

export default Banner;
