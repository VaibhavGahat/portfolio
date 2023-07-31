import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import {Link} from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "skill",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="fixed top-0 flex items-center justify-between w-full h-20 px-4 mb-10 text-white bg-black ">
      <h1 className="ml-2 text-5xl font-signature ">Vaibhav</h1>
      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 font-medium text-gray-500 capitalize duration-200 cursor-pointer hover:scale-105"
            >
            <Link to={link} smooth={true} duration={700}>{link}</Link>

            </li>
          );
        })}
      </ul>
      <div
        className="pr-4 text-gray-500 cursor-pointer md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        {nav && (
          <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800">
            {links.map(({ key, link }) => {
              return (
                <li key={key} className="px-4 py-4 text-4xl font-medium text-gray-500 capitalize cursor-pointer">
                  <Link onClick={()=>setNav(!nav)} to={link} smooth={true} duration={500}>{link}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
