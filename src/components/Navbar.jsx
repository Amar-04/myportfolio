import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex justify-between items-center md:mb-8 mb-2 py-8 bg-[#fbfbfe]">
      <div>
        <h2 className="text-xl font-bold">Amar Mulwani</h2>
        <p className="text-lg">Web Developer</p>
      </div>
      <ul className="md:flex gap-10 text-xl font-bold cursor-pointer hidden">
        <li>
          <a href="/">Home</a> 
        </li>
        <li>
          <a href="#about">About</a> 
        </li>
        <li>
          <a href="#projects">Projects</a> 
        </li>
        <li>
          <a href="#contact">Contact</a> 
        </li>
      </ul>
      <span
        className="md:hidden block cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <FaArrowUp /> : <FaArrowDown />}
      </span>
      <ul
        className={`md:hidden absolute top-28 left-0 w-full bg-[#fbfbfe] flex-col items-center gap-6 font-bold text-lg cursor-pointer z-0 ${
          showMenu ? "flex" : "hidden"
        }`}
      >
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
