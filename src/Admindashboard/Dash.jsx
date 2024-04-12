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
    <div data-aos="zoom-in">
      <div className="flex flex-wrap justify-center mt-8">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="px-10 py-4">
              <div className="flex items-center mb-4">
                <FaInstalod className="w-8 h-8 text-primary mr-2" />
                <div className="font-bold text-xl text-blue-500">Products</div>
              </div>
              <h2 className="text-3xl text-gray-800 font-semibold">{Products.length}</h2>
              <p className="text-gray-700 text-base">total products</p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="px-10 py-4">
              <div className="flex items-center mb-4">
                <HiUserGroup className="w-8 h-8 text-blue-500 mr-2" />
                <div className="font-bold text-xl text-blue-500">Customers</div>
              </div>
              <h2 className="text-3xl text-gray-800 font-semibold">{Billings.length}</h2>
              <p className="text-gray-700 text-base">Total of cumstomers</p>
            </div>
          </div>
        </div>

      

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="px-10 py-4">
              <div className="flex items-center mb-4">
                <HiUser className="w-8 h-8 text-primary mr-2" />
                <div className="font-bold text-xl text-green-500">
                  users
                </div>
              </div>
              <h2 className="text-3xl text-gray-800 font-semibold">
                {users.length}
              </h2>
              <p className="text-gray-700 text-base">Total of users</p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="px-10 py-4">
              <div className="flex items-center mb-4">
                <HiShoppingCart className="w-8 h-8 text-primary mr-2" />
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
