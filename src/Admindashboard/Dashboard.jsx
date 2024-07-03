

import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { FaDonate } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div data-aos="zoom-in">
      <div className="flex flex-col md:flex-row h-screen">
        {/* Mobile Sidebar Toggle Button */}
        <div className="md:hidden flex justify-between items-center bg-white p-4">
          <span className="text-2xl font-bold tracking-wide text-black">
            Admin
          </span>
          <button onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <AiOutlineClose className="text-2xl text-black" />
            ) : (
              <HiOutlineMenuAlt3 className="text-2xl text-black" />
            )}
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`bg-white text-white w-full md:w-64 flex flex-col justify-between shadow-md transition-all duration-300 ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }`}
        >
          <ul className="py-4 space-y-2">
            <Link to="/Admindashboard/Dashboard">
              <li className="px-6 py-3 flex items-center rounded-lg bg-primary hover:bg-gray-100 transition-colors duration-300 ml-3 mr-3">
                <IoMdHome className="mr-4 text-xl-1" />
                <span className="cursor-pointer text-lg font-semibold ">
                  Dashboard
                </span>
              </li>
            </Link>

            <Link to="/Admindashboard/Dashboard/Product">
              <li className="px-6 py-3 flex items-center rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <FaDonate className="mr-4 text-xl-1 text-black" />
                <span className="cursor-pointer text-xl-1 font-semibold text-black">
                  Donations
                </span>
              </li>
            </Link>

            <Link to="/Admindashboard/Dashboard/Customer">
              <li className="px-6 py-3 flex items-center rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <FaUserGroup className="mr-4 text-xl-1 text-black" />
                <span className="cursor-pointer text-xl-1 font-semibold text-black">
                  Donors
                </span>
              </li>
            </Link>
            <Link to="/Admindashboard/Dashboard/Users">
              <li className="px-6 py-3 flex items-center rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <FaUserPlus className="mr-4 text-xl-1 text-black" />
                <span className="cursor-pointer text-xl-1 font-semibold text-black">
                  Users
                </span>
              </li>
            </Link>
            <Link to="/Admindashboard/Dashboard/Order">
              <li className="px-6 py-3 flex items-center rounded-lg  hover:bg-gray-100 transition-colors duration-300">
                <FaUserPlus className="mr-4 text-xl-1 text-black" />
                <span className="cursor-pointer text-xl-1 font-semibold text-black">
                  Volunteers
                </span>
              </li>
            </Link>
            <Link to="/AdminDashboard/Dashboard/Setting">
              <li className="px-6 py-3 flex items-center rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <IoSettingsOutline className="mr-4 text-xl-1 text-black" />
                <span className="cursor-pointer text-xl-1 font-semibold text-black">
                  Settings
                </span>
              </li>
            </Link>
          </ul>
          <div className="mt-auto px-4 py-2 flex font-bold">
            <span className="block cursor-pointer hover:text-amber-300 flex items-center">
              <TbLogout className="mr-4 font-bold text-xl-1 text-black" />
              <Link to="/Login">
                <span className="cursor-pointer text-xl-1 font-semibold text-black">
                  Logout
                </span>
              </Link>
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-8">
          <div className="sidebar-right-side">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
