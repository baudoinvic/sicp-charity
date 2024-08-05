

import React, { useState } from "react";
import pic1 from "../../assets/pic1.jpg";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";


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
    submenu: [
      {
        id: 21,
        name: "Who We Are",
        link: "/About",
      },
      {
        id: 22,
        name: "Our History",
        link: "/Historic",
      },
      {
        id: 23,
        name: "Who Can Donate",
        link: "/Donate",
      },
    ],
  },
  {
    id: 3,
    name: "What We Do ",
    link: "/Service",
  },
  {
    id: 4,
    name: "Our Gallery",
    link: "/Gallery",
  },
  {
    id: 5,
    name: "Our Campaigns",
    link: "/Compaign",
  },
  {
    id: 6,
    name: "Impact",
    link: "/Funraise",
  },
  {
    id: 7,
    name: "Contact Us",
    link: "/Contact",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
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

  
          <div className="flex justify-between items-center gap-4">
       
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
           

            <Link to="/Login">
              <div className="sign-in flex">
                <FaRegUser className="mt-2" />
                <span className="text-gray-900 mt-1">Sign in</span>
              </div>
            </Link>
           

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

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden bg-white dark:bg-gray-900 py-2 z-50 fixed inset-0 mt-16 transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-center space-y-4 pt-16">
          {Menu.map((data) => (
            <li key={data.id} className="w-full text-center relative">
              {data.submenu ? (
                <>
                  <button
                    className="block w-full px-4 py-3 text-lg text-gray-600 dark:text-gray-300 hover:text-primary duration-200"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === data.id ? null : data.id
                      )
                    }
                  >
                    {data.name}
                    <FaChevronDown className="ml-1 inline" />
                  </button>
                  {activeDropdown === data.id && (
                    <ul className="bg-gray-100 dark:bg-gray-800 py-2">
                      {data.submenu.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            to={subItem.link}
                            className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary duration-200"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={data.link}
                  className="block w-full px-4 py-3 text-lg text-gray-600 dark:text-gray-300 hover:text-primary duration-200"
                >
                  {data.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center mb-5">
          {Menu.map((data, index) => (
            <li
              key={data.id}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {data.submenu ? (
                <>
                  <button className="flex items-center px-4 py-2 hover:text-primary duration-200">
                    {data.name}
                    {/* <FaChevronDown className="ml-1" /> */}
                  </button>
                  {activeDropdown === index && (
                    <ul className="absolute left-0 top-full bg-white dark:bg-gray-800 shadow-md rounded-md py-2 min-w-[200px]">
                      {data.submenu.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            to={subItem.link}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 hover:text-primary duration-200"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={data.link}
                  className="inline-block px-4 py-2 hover:text-primary duration-200"
                >
                  {data.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;