import React, { useState } from 'react';

const UserProfile = () => {
  // Sample user profile data
  const userProfileData = {
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nulla non metus interdum dapibus ac et sapien.'
    // Add more fields as needed
  };

  const [userName, setUserName] = useState(userProfileData.name);

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">User Profile</h1>
        <div className="mb-4">
          <label className="text-gray-700 font-bold">Name:</label>
          <input
            type="text"
            className="block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 mt-1 focus:outline-none focus:border-blue-500"
            value={userName}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 font-bold">Email:</label>
          <p className="text-gray-800">{userProfileData.email}</p>
        </div>
        <div className="mb-4">
          <label className="text-gray-700 font-bold">Bio:</label>
          <p className="text-gray-800">{userProfileData.bio}</p>
        </div>
        {/* Add more fields as needed */}
      </div>
    </div>
  );
};

export default UserProfile;
