import React from "react";
import { Bar } from "react-chartjs-2";
import {
  HiUserGroup,
  HiUser,
  HiShoppingCart,
  HiCurrencyDollar,
} from "react-icons/hi";
import Chart from "./Chart";

const Dash = () => {
  return (
    <div data-aos="zoom-in">
      <div className="flex flex-wrap justify-center mt-8">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="px-10 py-4">
              <div className="flex items-center mb-4">
                <HiUserGroup className="w-8 h-8 text-blue-500 mr-2" />
                <div className="font-bold text-xl text-blue-500">Customers</div>
              </div>
              <h2 className="text-3xl text-gray-800 font-semibold">34,416</h2>
              <p className="text-gray-700 text-base">Our customers</p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="px-10 py-4">
              <div className="flex items-center mb-4">
                <HiUser className="w-8 h-8 text-green-500 mr-2" />
                <div className="font-bold text-xl text-green-500">Users</div>
              </div>
              <h2 className="text-3xl text-gray-800 font-semibold">100</h2>
              <p className="text-gray-700 text-base">Number of users</p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="px-10 py-4">
              <div className="flex items-center mb-4">
                <HiShoppingCart className="w-8 h-8 text-blue-500 mr-2" />
                <div className="font-bold text-xl text-blue-500">Orders</div>
              </div>
              <h2 className="text-3xl text-gray-800 font-semibold">20.4k</h2>
              <p className="text-gray-700 text-base">Number of orders</p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="px-10 py-4">
              <div className="flex items-center mb-4">
                <HiCurrencyDollar className="w-8 h-8 text-blue-500 mr-2" />
                <div className="font-bold text-xl text-blue-500">Income</div>
              </div>
              <h2 className="text-3xl text-black font-semibold">$20.4k</h2>
              <p className="text-black text-base">Total income</p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-full md:w-full lg:w-full xl:w-full px-4 mb-8">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dash;
