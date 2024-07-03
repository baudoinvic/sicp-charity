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
import pic24 from "../assets/pic24.jpg";

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
    <div className="container mx-auto px-4">
      <div data-aos="zoom-in">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-500" />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
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
            <div className="relative ml-4">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={pic24}
                  alt="profile"
                  className="w-10 rounded-full object-coover cursor-pointer"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            {
              icon: FaInstalod,
              title: "Donations",
              count: Products.length,
              subtitle: "Items up for Donations",
              color: "orange",
            },
            {
              icon: HiUserGroup,
              title: "Donners",
              count: Billings.length,
              subtitle: "Total Donors",
              color: "orange",
            },
            {
              icon: HiUser,
              title: "Users",
              count: users.length,
              subtitle: "Total Users",
              color: "orange",
            },
            {
              icon: HiShoppingCart,
              title: "Volunteers",
              count: 20,
              subtitle: "Total Volunteers",
              color: "orange",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="px-6 py-4">
                <div
                  className={`flex items-center mb-2 text-${item.color}-500`}
                >
                  <item.icon className="w-6 h-6 mr-2" />
                  <div className="font-semibold text-lg">{item.title}</div>
                </div>
                <h2 className="text-2xl text-gray-800 font-bold mb-1">
                  {item.count}
                </h2>
                <p className="text-gray-600 text-sm">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dash;
