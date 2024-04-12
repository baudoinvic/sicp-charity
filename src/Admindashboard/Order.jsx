import React from 'react'
import { GiDialPadlock } from "react-icons/gi";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { useEffect } from "react";
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

const Order = () => {
 const [orders, setOrders] = useState([]);

 const fetchOrders = () => {
   let token = localStorage.getItem("token");
   axios({
     url: "https://beathaecommerceback-end.onrender.com/api/v1/users",
     method: "GET",
     headers: {
       Authorization: `Bearer ${token}`,
     },
   })
     .then((response) => {
       const allOrdes = response.data;
       setOrders(allOrdes);
       toast.success(response.data.message);
     })
     .catch((error) => {
       console.log(error);
     });
 };

 useEffect(() => {
   fetchOrders();
 }, []);




  return (
    

    <div data-aos="zoom-in" className="mt-10">
      <span className="text-3xl font-bold">Orders</span>
      <div class="bg-white p-4 rounded-lg ">
        <div class="flex shadow-md mt-10">
          <span class="font-bold w-1/4">customerName</span>
          <span class="font-bold w-1/4">Amount</span>
          <span class="font-bold w-1/4">number of items</span>
          <span class="font-bold w-1/4">Payment status</span>
        </div>
        {orders.map((order) => (
          <div className="flex mt-10" key={order._id}>
            <span className="w-1/4">{order.customerName}</span>
            <span className="w-1/4">{order.amount}</span>
            <span className="w-1/4">{order.numberOfItems}</span>
            <span className="w-1/4">{order.paymentStatus}</span>
            {/* <span
              className="w-1/8 bg-green-500 py-1 px-2 rounded-lg text-white text-center"
              style={{ cursor: "pointer" }}
            >
              View
            </span> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order
