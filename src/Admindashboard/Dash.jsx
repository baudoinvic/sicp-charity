import React from "react";
import { Bar } from "react-chartjs-2";
import {
  HiUserGroup,
  HiUser,
  HiShoppingCart,
  HiCurrencyDollar,
} from "react-icons/hi";
import Chart from "./Chart";

import { FaInstalod } from "react-icons/fa6";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaSearch, FaBell, FaEnvelope, FaGlobe } from "react-icons/fa";

const Dash = () => {

const [Products, setProducts] = useState([]);
 

const [users, setUsers] = useState([]);

const fetchUsers = () => {
  let token = localStorage.getItem("token");
  axios({
    url: "https://beathaecommerceback-end.onrender.com/api/v1/users",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      const allUsers = response.data;
      setUsers(allUsers);
      toast.success(response.data.message);
    })
    .catch((error) => {
      console.log(error);
    });
};

useEffect(() => {
  fetchUsers();
}, []);


const [Billings, setBillings] = useState([]);

const fetchBillings = () => {
  let token = localStorage.getItem("token");
  axios({
    url: "https://beathaecommerceback-end.onrender.com/api/v1/billing",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      const allBillings = response.data;
      setBillings(allBillings);
      toast.success(response.data.message);
    })
    .catch((error) => {
      console.log(error);
    });
};

useEffect(() => {
  fetchBillings();
}, []);

 const fetchProducts = () => {
   let token = localStorage.getItem("token");
   axios({
     url: "https://beathaecommerceback-end.onrender.com/api/v1/product/viewAllProd",
     method: "GET",
     headers: {
       Authorization: `Bearer ${token}`,
     },
   })
     .then((response) => {
       const productsData = response.data.products;
       setProducts(productsData);
       toast.success(response.data.message);
     })
     .catch((error) => {
       console.error("Error fetching products:", error);
       toast.error("Error fetching products. Please try again later.");
     });
 };

 useEffect(() => {
   fetchProducts();
 }, []);


  return (
    <div className="">
      <div data-aos="zoom-in  ">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="relative mr-4">
              <input
                type="text"
                placeholder="Search..."
                className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-500" />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <FaBell className="text-gray-500" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <FaEnvelope className="text-gray-500" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <FaGlobe className="text-gray-500" />
              </button>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mt-8 space-x-10">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="px-6 py-4">
                <div className="flex items-center mb-2">
                  <FaInstalod className="w-6 h-6 text-teal-500 mr-2" />
                  <div className="font-semibold text-lg text-teal-500">
                    Donations
                  </div>
                </div>
                <h2 className="text-2xl text-gray-800 font-bold mb-1">
                  {Products.length}
                </h2>
                <p className="text-gray-600">Items up for Donations</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="px-6 py-4">
                <div className="flex items-center mb-2">
                  <HiUserGroup className="w-6 h-6 text-indigo-500 mr-2" />
                  <div className="font-semibold text-lg text-indigo-500">
                    Donners
                  </div>
                </div>
                <h2 className="text-2xl text-gray-800 font-bold mb-1">
                  {Billings.length}
                </h2>
                <p className="text-gray-600">Total Donors</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="px-6 py-4">
                <div className="flex items-center mb-2">
                  <HiUser className="w-6 h-6 text-green-500 mr-2" />
                  <div className="font-semibold text-lg text-green-500">
                     Users
                  </div>
                </div>
                <h2 className="text-2xl text-gray-800 font-bold mb-1">
                  {users.length}
                </h2>
                <p className="text-gray-600">Total Users</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="px-6 py-4">
                <div className="flex items-center mb-2">
                  <HiShoppingCart className="w-6 h-6 text-orange-500 mr-2" />
                  <div className="font-semibold text-lg text-orange-500">
                    Volunteers
                  </div>
                </div>
                <h2 className="text-2xl text-gray-800 font-bold mb-1">20.4k</h2>
                <p className="text-gray-600">Total Volunteers</p>
              </div>
            </div>
          </div>

          <div className="w-full  sm:w-full md:w-full lg:w-full xl:w-full px-4 mb-8">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
