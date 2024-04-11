import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex m-4">
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-semibold mb-4 text-white">Book Store <br/> 
          <span className='text-4xl font-medium text-blue-500 mt-1'>For You</span>
        </h1>
        <h6 className='text-white m-0 p-0 -ml-6'>Checkout the books from here</h6>
        <NavLink to="/books" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4 -ml-32 hover:text-cyan-100">View Books</NavLink>
      </div>
      <div className="flex-1 flex justify-center items-center mt-14">
        <img
          src="https://thumbs.dreamstime.com/b/man-reading-book-living-room-home-man-reading-book-living-room-136007117.jpg"
          alt="student"
          className="rounded-lg w-300px h-400px"
        />
      </div>
    </div>
  );
};

export default Hero;
