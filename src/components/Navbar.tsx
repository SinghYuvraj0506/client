import React from "react";

const Navbar = () => {
  return (
    <header className="bg-primaryBlack text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">Amazon Mock</div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search for products"
            className="p-2 rounded-md w-72 text-gray-800"
          />
          <button className="bg-primaryYellow text-gray-900 px-4 py-2 rounded-md">
            Search
          </button>
        </div>
        <div>
          <button className="text-sm px-4 py-2 bg-primaryYellow rounded-md">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;