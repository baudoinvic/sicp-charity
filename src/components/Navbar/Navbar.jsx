

import React, { useState } from "react";
// import Logo from "../../assets/logo.png";
import pic1 from "../../assets/pic1.jpg";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About Us",
    link: "/About",
  },
  {
    id: 3,
    name: "What we do",
    link: "/Service",
  },
  {
    id: 3,
    name: "Our Gallery",
    link: "/Gallery",
  },
  {
    id: 4,
    name: "Campaign",
    link: "/Compaign",
  },
  {
    id: 5,
    name: "Fundraising",
    link: "/Funraise",
  },
  {
    id: 6,
    name: "Contact us",
    link: "/Contact",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-white py-4">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={pic1} alt="Logo" className="w-10" />
              SICP
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            {/* Search input */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Sign in button */}
            <Link to="/Login">
              <div className="sign-in flex">
                <FaRegUser className="mt-2" />
                <span className="text-gray-900 mt-1">Sign in</span>
              </div>
            </Link>

            {/* Dark mode toggle */}
            <div>
              <DarkMode />
            </div>

            {/* Mobile menu toggle button */}
            <button
              className="sm:hidden block text-gray-600 dark:text-gray-300 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden bg-white dark:bg-gray-900 py-2 z-50 fixed inset-0 mt-16 transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-center space-y-4  pt-16">
          {Menu.map((data) => (
            <li key={data.id} className="w-full text-center">
              <a
                href={data.link}
                className="block w-full px-4 py-3 text-lg text-gray-600 dark:text-gray-300 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center mb-5">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

