import React from 'react';

const Header = ({ organizationName, userName, profilePic }) => {
  return (
    <header className="bg-gray-800 p-4 m-1 rounded-lg shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Organization Name */}
        <div className="text-white text-xl font-bold">
          {organizationName}
        </div>

        {/* User Info */}
        <div className="flex items-center space-x-4">
          {/* User Name */}
          <div className="text-white">
            {userName}
          </div>
          {/* Profile Picture */}
          <img
            src={profilePic}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
