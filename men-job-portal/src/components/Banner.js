import React, { useState } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";

const Banner = ({ query, handleInputChange }) => {
  return (
    <div className='bg-sky-500 xl:px-24 px-10 py-14 h-[80vh] flex justify-center items-center'
      style={{
        clipPath: 'polygon(0 1%, 100% 0%, 100% 85%, 0% 100%)',
        '@screen sm': {
          clipPath: 'polygon(0 1%, 100% 0%, 100% 70%, 0% 100%)',
        },
      }}
    >
      <div className="w-full md:w-[80%] flex flex-col items-center justify-center">
        <h1 className='text-6xl font-sans text-white mb-10'>
          Find Your<span className="text-white"> New Job Today.</span>
        </h1>
        <p className='text-lg text-white '>We Can Help You Succeed</p>
        <p className='text-lg text-white mb-8'>Browse Thousands Of Jobs From Top Companies</p>
        <form className="w-full">
          <div className='flex justify-start md:flex-row flex-col w-full'>
            <div className='bg-white flex md:rounded-s-md rounded shawdow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full'>
              <input
                type="text"
                name="title"
                placeholder='Job Title, Skills or Company'
                id="title"
                className='block flex-1 border-0 bg-transparent py-3 pl-10 text-grey-900 placeholder:text-gray-400 focus=right-0 sm:text-sm sm:leading-6'
                onChange={handleInputChange}
                value={query}
              />
              <FiSearch className='absolute mt-4 ml-2 text-gray-400' />
            </div>
            <div className='bg-white flex md:rounded-s-none rounded shawdow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full hover:pointer'>
              <select
                name="city"
                id="city"
                className='block flex-1 border-0 bg-transparent py-3 pl-10 pr-4 text-grey-900 placeholder:text-gray-400 focus=right-0 sm:text-sm sm:leading-6'
                onChange={(event) => handleLocationChange(event.target.value)}
                value={selectedLocation}
              >
                <option value="">Select a city</option>
                <option value="">All</option>
                <option value="London">London</option>
                <option value="Manchester">Manchester</option>
                <option value="Birmingham">Birmingham</option>
                <option value="Liver Pool">Liver Pool</option>
                <option value="Glasgow">Glasgow</option>
                <option value="Edinburgh">Edinburgh</option>
                <option value="Sheffeild">Sheffeild</option>
                <option value="Oxford">Oxford</option>
                <option value="Bristol">Bristol</option>
                <option value="Norwich">Norwich</option>
                <option value="Cambridge">Cambridge</option>
                <option value="Dublin">Dublin</option>
                <option value="Nottingham">Nottingham</option>
                <option value="Derby">Derby</option>
              </select>
              <FiMapPin className='absolute mt-4 ml-2 text-gray-400' />
            </div>

          </div>

          <button type='submit'  className='bg-yellow-400 py-2 px-8 text-white md:rounded-s-none rounded hover:bg-white hover:text-black '>Search</button>
        </div>
      </form>
    </div>
  );
};

export default Banner;
