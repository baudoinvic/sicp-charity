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
      <div className="bg-white p-4 rounded-lg overflow-x-auto">
        <div className="min-w-full">
          <div className="flex flex-col sm:flex-row shadow-md mt-10">
            <span className="font-bold w-full sm:w-1/4 text-sm p-2">Name</span>
            <span className="font-bold w-full sm:w-1/4 text-sm p-2">Email</span>
            <span className="font-bold w-full sm:w-1/4 text-sm p-2">
              Country
            </span>
            <span className="font-bold w-full sm:w-1/4 text-sm p-2">
              Phone number
            </span>
          </div>
          {orders.map((order) => (
            <div
              className="flex flex-col sm:flex-row mt-4 border-b"
              key={order._id}
            >
              <span className="w-full sm:w-1/4 text-sm p-2">
                {order.customerName}
              </span>
              <span className="w-full sm:w-1/4 text-sm p-2">
                {order.amount}
              </span>
              <span className="w-full sm:w-1/4 text-sm p-2">
                {order.numberOfItems}
              </span>
              <span className="w-full sm:w-1/4 text-sm p-2">
                {order.paymentStatus}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Volunteer
