import React from 'react'
 import { Link, NavLink, Outlet } from "react-router-dom";
 import { IoMdHome } from "react-icons/io";
 import { MdProductionQuantityLimits } from "react-icons/md";
 import { FaUserGroup } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import { FaBorderStyle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

function Dashboard() {
  
  return (
    <div data-aos="zoom-in">
      <div className="flex flex-col md:flex-row h-screen">
        {/* Sidebar */}
        <div className="bg-gray-900 text-white w-full md:w-64 flex flex-col justify-between">
          <div className="p-4 flex items-center">
            <span className="text-xl font-bold">Beatha-BM</span>
          </div>
          <ul className="py-4">
            <Link to="/Admindashboard/Dashboard">
              <li className="px-4 py-4 flex items-center font-bold bg-primary rounded-lg">
                <IoMdHome className="mr-4" />
                <span className="cursor-pointer">Home</span>
              </li>
            </Link>

            <Link to="/Admindashboard/Dashboard/Product">
              <li className="px-4 py-4 flex items-center font-bold">
                <MdProductionQuantityLimits className="mr-4" />
                <span className="cursor-pointer">Products</span>
              </li>
            </Link>

            <Link to="/Admindashboard/Dashboard/Customer">
              <li className="px-4 py-4 flex items-center font-bold">
                <FaUserGroup className="mr-4" />
                <span className="cursor-pointer">Customers</span>
              </li>
            </Link>
            <Link to="/Admindashboard/Dashboard/Users">
              <li className="px-4 py-4 flex items-center font-bold">
                <FaUserPlus className="mr-4" />
                <span className="cursor-pointer">Users</span>
              </li>
            </Link>
            <Link to="/Admindashboard/Dashboard/Order">
              <li className="px-4 py-4 flex items-center font-bold">
                <FaBorderStyle className="mr-4" />
                <span className="cursor-pointer">Orders</span>
              </li>
            </Link>
            <Link to="/AdminDashboard/Dashboard/Setting">
              <li className="px-4 py-4 flex items-center font-bold">
                <IoSettingsOutline className="mr-4" />
                <span className="cursor-pointer">Settings</span>
              </li>
            </Link>
          </ul>
          <div className="mt-auto px-4 py-2 flex font-bold">
            <span className="block cursor-pointer hover:text-gray-300 flex items-center">
              <TbLogout className="mr-4 font-bold" />
              <Link to="/Login">
                <span className="cursor-pointer">Logout</span>
              </Link>
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white p-8">
          <div className="sidebar-right-side">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
