import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-[#fbfbfe] pb-4 mb-10" id="home">
      <div className="container mx-auto md:px-8 px-6 max-w-5xl">
        <Navbar />
        <div className="text-center">
            <h1 className="md:text-4xl text-lg font-bold">
            Building Modern Web Solutions <br />with Passion 
            </h1>
            <p className="mt-3 text-xl">
            Dedicated to excellence in design and development.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
