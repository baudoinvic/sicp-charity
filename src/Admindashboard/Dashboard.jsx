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
    <div data-aos="zoom-in">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="bg-gray-900 text-white w-64 flex flex-col justify-between">
          <div className="p-4 flex items-center">
            <span className="text-xl font-bold">Beatha-Ecommerce</span>
          </div>
          <ul className="py-4">
            <li className="px-4 py-4 flex items-center font-bold">
              <IoMdHome className="mr-4" />
              <span className='cursor-pointer'>Home</span>
            </li>
            <li className="px-4 py-4 flex items-center font-bold">
              <MdProductionQuantityLimits className="mr-4" />
              <span className='cursor-pointer'>Products</span>
            </li>
            <li className="px-4 py-4 flex items-center font-bold">
              <FaUserGroup className="mr-4" />
              <span className='cursor-pointer'>Customers</span>
            </li>
            <li className="px-4 py-4 flex items-center font-bold">
              <FaUserPlus className="mr-4" />
              <span className='cursor-pointer'>Users</span>
            </li>
            <li className="px-4 py-4 flex items-center font-bold">
              <FaBorderStyle className="mr-4" />
              <span className='cursor-pointer'>Orders</span>
            </li>
            <li className="px-4 py-4 flex items-center font-bold">
              <IoSettingsOutline className="mr-4" />
              <span className='cursor-pointer'>Settings</span>
            </li>
          </ul>
          <div className="mt-auto px-4 py-2 flex font-bold">
            <span className="block cursor-pointer hover:text-gray-300 flex items-center">
              <TbLogout className="mr-4 font-bold" />
              <span className='cursor-pointer'>Logout</span>
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
