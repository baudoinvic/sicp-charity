import React from 'react'
import { GiDialPadlock } from "react-icons/gi";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { useEffect } from "react";
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

const Volunteer = () => {
 const [orders, setOrders] = useState([]);

 const fetchOrders = () => {
   let token = localStorage.getItem("token");
   axios({
     url: "https://beathaecommerceback-end.onrender.com/api/v1/orders",
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
      <span className="text-1xl font-bold">Volunteers</span>
      <div class="bg-white p-4 rounded-lg ">
        <div class="flex shadow-md mt-10">
          <span class="font-bold w-1/4 text-sm">Name</span>
          <span class="font-bold w-1/4 text-sm">Email</span>
          <span class="font-bold w-1/4 text-sm">Country</span>
          <span class="font-bold w-1/4 text-sm">Phone number</span>
        </div>
        {orders.map((order) => (
          <div className="flex mt-10" key={order._id}>
            <span className="w-1/4 text-sm">{order.customerName}</span>
            <span className="w-1/4 text-sm">{order.amount}</span>
            <span className="w-1/4 text-sm">{order.numberOfItems}</span>
            <span className="w-1/4 text-sm">{order.paymentStatus}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Volunteer
