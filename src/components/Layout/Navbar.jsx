import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 backdrop-blur-md 
    fixed w-full z-10">
      <nav className="flex justify-between items-center bg-white py-4 px-8">
        <div className="text-white text-xl font-bold">Your Logo</div>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white hover:text-gray-300 transition duration-300">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 transition duration-300">About</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 transition duration-300">Services</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 transition duration-300">Contact</a></li>
        </ul>
      </nav>
   </header>
  );
};

export default Navbar;
