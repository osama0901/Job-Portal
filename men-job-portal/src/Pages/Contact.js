import React from 'react'
import Lottie from 'react-lottie'
import Letter from "../Data/Letter.json"

const Contactus = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Letter, 
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    // <div className='container py-10 px-20'>

    //   <h3 className='text-sky-500 font-sans text-2xl text-bold text-center   mb-4 '> Contact US</h3>

    //   <hr className='mb-2' ></hr>
    // </div>
    <div className=" mb-10">
      <div className="py-[3%] px-[5%] md:px-[14%] ">
        <h3 className='text-sky-500 font-sans text-2xl text-bold text-center   mb-4 '> Contact US</h3>
        <hr className='mb-2' ></hr>
        <div className="flex flex-col justify-between mt-4 gap-14 ">
          <div className="pt-8 w-[100%] flex mx-auto gap-6">
            <div className="w-full lg:w-[60%]">
              <form
                // onSubmit={handleSubmit}
                className="flex flex-col gap-4 mt-2"
              >
                <input
                  type="text"
                  id="firstName"
                  // value={formData.firstName}
                  // value={name}
                  // onChange={handleChange}
                  // onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-gray-400 text-gray-800 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 outline-blue"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  id="email"
                  // value={formData.email}
                  // value={email}
                  // onChange={handleChange}
                  // onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-400 text-gray-800 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 outline-blue"
                  placeholder="Email"
                  required
                />

                <input
                  type="text"
                  id="phone"
                  // value={formData.phone}
                  // value={phone}
                  // onChange={handleChange}
                  // onChange={(e) => setPhone(e.target.value)}
                  className="bg-gray-50 border border-gray-400 text-gray-800 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 outline-blue"
                  placeholder="Phone"
                  required
                />
                <textarea
                  id="description"
                  // value={formData.description}
                  // value={message}
                  // onChange={handleChange}
                  // onChange={(e) => setMessage(e.target.value)}
                  className="bg-gray-50 border border-gray-400 text-gray-800 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 outline-blue"
                  placeholder="Enquiry Message"
                  required
                  spellCheck="true"
                />
                <button
                  type="submit"
                  className="text-white bg-blue hover:bg-white hover:text-blue hover:border hover:border-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-6 py-2 text-center h-[42px] w-[100px]"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="justify-center pt-4 hidden lg:flex">
              <Lottie options={defaultOptions} height={300} width={350} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus