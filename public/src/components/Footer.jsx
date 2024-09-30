import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className="container max-w-5xl mx-auto px-4 text-center my-4" id="contact">
        <h1 className="text-3xl font-bold my-4">Contact</h1>
        <div className="flex justify-between items-center md:w-[30%] w-[80%] mx-auto my-8">
          <a 
            href="https://www.linkedin.com/in/amar-mulwani-63354824a/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-md shadow cursor-pointer hover:scale-105"
          >
            <FaLinkedin className="text-6xl" />
          </a>
          <a 
            href="mailto:mulwaniamar04@gmail.com"
            className="p-4 rounded-md shadow cursor-pointer hover:scale-105"
          >
            <BiLogoGmail className="text-6xl" />
          </a>
        </div>
      </div>
      <footer className="bg-indigo-50 py-8 text-center shadow cursor-pointer">
        <h2 className="text-lg">
          &copy; {new Date().getFullYear()} Amar. All Rights Reserved.
        </h2>
      </footer>
    </>
  );
};

export default Footer;
