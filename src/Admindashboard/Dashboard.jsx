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
   
    <div data-aos="zoom-in ">
      <div className="flex flex-col md:flex-row h-screen ">
        <div className="bg-primary text-white w-full md:w-64 flex flex-col justify-between">
          <div className="p-4 flex items-center">
            <span className="text-2xl font-bold tracking-wide">
              Admin
            </span>
          </div>
          <ul className="py-4 space-y-2">
            <Link to="/Admindashboard/Dashboard">
              <li className="px-6 py-3 flex items-center rounded-lg bg-orange-700 hover:bg-orange-800 transition-colors duration-300">
                <IoMdHome className="mr-4 text-xl" />
                <span className="cursor-pointer text-lg font-semibold">
                  Dashboard
                </span>
              </li>
            </Link>

            <Link to="/Admindashboard/Dashboard/Product">
              <li className="px-6 py-3 flex items-center rounded-lg hover:bg-orange-600 transition-colors duration-300">
                <MdProductionQuantityLimits className="mr-4 text-xl" />
                <span className="cursor-pointer text-lg font-semibold">
                  Auction Items
                </span>
              </li>
            </Link>

            <Link to="/Admindashboard/Dashboard/Customer">
              <li className="px-6 py-3 flex items-center rounded-lg hover:bg-orange-600 transition-colors duration-300">
                <FaUserGroup className="mr-4 text-xl" />
                <span className="cursor-pointer text-lg font-semibold">
                  Bidders
                </span>
              </li>
            </Link>
            <Link to="/Admindashboard/Dashboard/Users">
              <li className="px-6 py-3 flex items-center rounded-lg hover:bg-orange-600 transition-colors duration-300">
                <FaUserPlus className="mr-4 text-xl" />
                <span className="cursor-pointer text-lg font-semibold">
                  Sellers
                </span>
              </li>
            </Link>
            <Link to="/Admindashboard/Dashboard/Order">
              <li className="px-6 py-3 flex items-center rounded-lg hover:bg-orange-600 transition-colors duration-300">
                <FaBorderStyle className="mr-4 text-xl" />
                <span className="cursor-pointer text-lg font-semibold">
                  Bids
                </span>
              </li>
            </Link>
            <Link to="/AdminDashboard/Dashboard/Setting">
              <li className="px-6 py-3 flex items-center rounded-lg hover:bg-orange-600 transition-colors duration-300">
                <IoSettingsOutline className="mr-4 text-xl" />
                <span className="cursor-pointer text-lg font-semibold">
                  Settings
                </span>
              </li>
            </Link>
          </ul>
          <div className="mt-auto px-4 py-2 flex font-bold">
            <span className="block cursor-pointer hover:text-amber-300 flex items-center">
              <TbLogout className="mr-4 font-bold text-xl" />
              <Link to="/Login">
                <span className="cursor-pointer text-lg font-semibold">
                  Logout
                </span>
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
