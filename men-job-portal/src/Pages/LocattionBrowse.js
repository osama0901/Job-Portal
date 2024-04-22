import React from 'react';

const LocationBrowse = () => {
    return (
        <>
            <div className='flex flex-col px-10'>
                <h2 className='mb-5 text-2xl container text-bold text-sky-500 font-sans'>
                    Browse by Locations
                </h2>
                <hr className='p-5' />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center mb-10 px-10">
                {/* First div */}
                <div className=" bg-gray-100 p-4 rounded-lg">
                    <div className='flex justify-between  bg-white py-3 px-3 rounded-lg'>
                        <h3 className="text-sm font-bold cursor-pointer hover:text-[#98d8f4]">
                            London
                        </h3>
                        <p className='bg-[#e7f8fd] text-gray-900 px-2 cursor-pointer'>
                            3
                        </p>
                    </div>
                    <div className='flex justify-between  bg-white py-3 px-3 rounded-lg mt-3'>
                        <h3 className="text-sm font-bold cursor-pointer hover:text-[#98d8f4] ">
                            Manchester
                        </h3>
                        <p className='bg-[#e7f8fd] text-gray-900 px-2 cursor-pointer'>6</p>
                    </div> <div className='flex justify-between  bg-white py-3 px-3 rounded-lg mt-3'>
                        <h3 className="text-sm font-bold cursor-pointer hover:text-[#98d8f4] ">
                            Birmingham
                        </h3>
                        <p className='bg-[#e7f8fd] text-gray-900 px-2 cursor-pointer'>1</p>
                    </div>
                    <div className='flex justify-between  bg-white py-3 px-3 rounded-lg mt-3'>
                        <h3 className="text-sm font-bold cursor-pointer hover:text-[#98d8f4] ">
                            Liver Pool
                        </h3>
                        <p className='bg-[#e7f8fd] text-gray-900 px-2 cursor-pointer'>3</p>
                    </div>
                    <div className='flex justify-between  bg-white py-3 px-3 rounded-lg mt-3'>
                        <h3 className="text-sm font-bold cursor-pointer hover:text-[#98d8f4] ">
                            City of Westminster
                        </h3>
                        <p className='bg-[#e7f8fd] text-gray-900 px-2 cursor-pointer'>3</p>
                    </div>
                </div>
                {/* Second div */}
                <div className=" bg-gray-100 p-4 rounded-lg">
                    <div className='flex justify-between  bg-white py-3 px-3 rounded-lg'>
                        <h3 className="text-sm font-bold cursor-pointer hover:text-[#98d8f4] ">
                            Glasgow
                        </h3>
                        <p className='bg-[#e7f8fd] text-gray-900 px-2 cursor-pointer'>
                            13
                        </p>
                    </div>
                    <div className='flex justify-between  bg-white py-3 px-3 rounded-lg mt-3'>
                        <h3 className="text-sm font-bold cursor-pointer hover:text-[#98d8f4] ">
                            Edinburgh
                        </h3>
                        <p className='bg-[#e7f8fd] text-gray-900 px-2 cursor-pointer'>
                            10
                        </p>
                    </div>
                    <div className='flex justify-between  bg-white py-3 px-3 rounded-lg mt-3'>
                        <h3 className="text-sm font-bold cursor-pointer hover:text-[#98d8f4] ">
                            Sheffeild
                        </h3>
                        <p className='bg-[#e7f8fd] text-gray-900 px-2 cursor-pointer'>
                            10
                        </p>
                    </div>
                    <div className='flex justify-between  bg-white py-3 px-3 rounded-lg mt-3'>
                        <h3 className="text-sm font-bold cursor-pointer hover:text-[#98d8f4] ">
                            Oxford
                        </h3>
                        <p className='bg-[#e7f8fd] text-gray-900 px-2 cursor-pointer'>
                            25
                        </p>
                    </div>
                    <div className='flex justify-between  bg-white py-3 px-3 rounded-lg mt-3'>
                        <h3 className="text-sm font-bold cursor-pointer hover:text-[#98d8f4] ">
                            Bristol
                        </h3>
                        <p className='bg-[#e7f8fd] text-gray-900 px-2 cursor-pointer'>
                            20
                        </p>
                    </div>
                </div>
                {/* Third div */}
                <div className=" bg-gray-100 p-4 rounded-lg">
                    <div className='flex justify-between  bg-white py-3 px-3 rounded-lg'>
                        <h3 className="text-sm font-bold cursor-pointer hover:text-[#98d8f4] ">
                            Norwich
                        </h3>
                        <p className='bg-[#e7f8fd] text-gray-900 px-2 cursor-pointer'>
                            13
                        </p>
                    </div>
                    <div className='flex justify-between  bg-white py-3 px-3 rounded-lg mt-3'>
                        <h3 className="text-sm font-bold cursor-pointer hover:text-[#98d8f4] ">
                            Cambridge
                        </h3>
                        <p className='bg-[#e7f8fd] text-gray-900 px-2 cursor-pointer'>
                            10
                        </p>
                    </div>
                    <div className='flex justify-between  bg-white py-3 px-3 rounded-lg mt-3'>
                        <h3 className="text-sm font-bold cursor-pointer hover:text-[#98d8f4] ">
                            Dublin
                        </h3>
                        <p className='bg-[#e7f8fd] text-gray-900 px-2 cursor-pointer'>
                            10
                        </p>
                    </div>
                    <div className='flex justify-between  bg-white py-3 px-3 rounded-lg mt-3'>
                        <h3 className="text-sm font-bold cursor-pointer hover:text-[#98d8f4] ">
                            Nottingham
                        </h3>
                        <p className='bg-[#e7f8fd] text-gray-900 px-2 cursor-pointer'>
                            25
                        </p>
                    </div>
                    <div className='flex justify-between  bg-white py-3 px-3 rounded-lg mt-3'>
                        <h3 className="text-sm font-bold cursor-pointer hover:text-[#98d8f4] ">
                            Derby
                        </h3>
                        <p className='bg-[#e7f8fd] text-gray-900 px-2 cursor-pointer'>
                            20
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LocationBrowse;
