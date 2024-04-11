import React from 'react';
import {NavLink} from "react-router-dom";

const BooksSection = ({ data }) => {
  // console.log(data.id);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 m-6">
      {data && data.map((item) => {
        return (
          <div key={item.id} className="bg-white p-4 mb-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:transition-all duration-500">
            <div>
              <img src={item.image} alt="book" className="w-full h-64 mb-4 rounded" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold"><span className="text-blue-500">Book Name: </span>{item.bookName}</h2>
                <p className="text-gray-700 mb-2 text-base"><span className="text-blue-500">Description: </span>{item.description.slice(0,350)}</p>
                <p className="text-gray-700"><span className="text-blue-500">Author: </span>{item.author}</p>
                <p className="text-gray-700"><span className="text-blue-500">Price: ₹</span> {item.price}</p>
              </div>
              <div className="flex justify-between mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">
                  <NavLink to={`/updateBooks/${item._id}`}>Update</NavLink>
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                  <NavLink to={`/deleteBook/${item._id}`}>Delete</NavLink>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BooksSection;
