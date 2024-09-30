import React from "react";
import { Link } from "react-router-dom";
import { PiCoffeeFill } from "react-icons/pi";
import { FaExternalLinkSquareAlt, FaTruck } from "react-icons/fa";

const Projects = () => {
  return (
    <div
      className="container max-w-5xl mx-auto px-4 text-center my-10"
      id="projects"
    >
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 gap-4 md:flex md:flex-row md:justify-between md:px-40 my-8">
        <div className="bg-[#f8fafb] hover:bg-indigo-50 hover:scale-105 rounded-xl shadow my-4 p-4 flex flex-col gap-2 text-center cursor-pointer">
          <PiCoffeeFill className="text-8xl mx-auto" />
          <h1 className="text-xl font-bold">Cafe Management System</h1>
          <button className="bg-transparent mx-auto">
            <Link to="/cafe">
              <FaExternalLinkSquareAlt className="text-xl" />
            </Link>
          </button>
        </div>
        <div className="bg-[#f8fafb] hover:bg-indigo-50 hover:scale-105 rounded-xl shadow my-4 p-4 flex flex-col gap-2 text-center cursor-pointer">
          <FaTruck className="text-8xl mx-auto" />
          <h1 className="text-xl font-bold">Shipping Rate Calculator</h1>
          <button className="bg-transparent mx-auto">
            <Link to="shipping">
              <FaExternalLinkSquareAlt className="text-xl" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
