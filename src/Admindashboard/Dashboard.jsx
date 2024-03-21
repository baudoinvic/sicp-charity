import React from 'react'
 import { NavLink, Outlet } from "react-router-dom";
 import { IoMdHome } from "react-icons/io";
 import { MdProductionQuantityLimits } from "react-icons/md";
 import { FaUserGroup } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import { FaBorderStyle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

function Dashboard() {
  return (
    <div>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="bg-gray-800 text-white w-64 flex flex-col justify-between">
          <div className="p-4 flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-2"
              src="https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-600nw-418179856.jpg"
              alt=""
            />
            <span className="text-xl font-semibold">Beatha</span>
          </div>
          <ul className="py-4">
            <li className="px-4 py-4 flex items-center">
              <IoMdHome className="mr-4" />
              <span>Home</span>
            </li>
            <li className="px-4 py-4 flex items-center">
              <MdProductionQuantityLimits className="mr-4" />
              <span>Products</span>
            </li>
            <li className="px-4 py-4 flex items-center">
              <FaUserGroup className="mr-4" />
              <span>Customers</span>
            </li>
            <li className="px-4 py-4 flex items-center">
              <FaUserPlus className="mr-4" />
              <span>Users</span>
            </li>
            <li className="px-4 py-4 flex items-center">
              <FaBorderStyle className="mr-4" />
              <span>Orders</span>
            </li>
            <li className="px-4 py-4 flex items-center">
              <IoSettingsOutline className="mr-4" />
              <span>Settings</span>
            </li>
          </ul>
          <div className="mt-auto px-4 py-2 flex">
            <span className="block cursor-pointer hover:text-gray-300 flex items-center">
              <TbLogout className="mr-4" />
              <span>Logout</span>
            </span>
           
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-gray-200 p-8">
          {/* This is where you render the content */}
          {/* Make sure to use Outlet from react-router to render nested routes */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard
