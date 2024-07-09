import React from 'react'
import { GiDialPadlock } from "react-icons/gi";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { useEffect } from "react";
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

const Volunteer = () => {
 
  const [donations, setDonations] = useState([]);
  const fetchDonations = () => {
    let token = localStorage.getItem("token");
    axios({
      url: "https://auction-website-auji.onrender.com/api/v1/donations",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        const donationsData = response.data.products;
        setDonations(donationsData);
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching donations:", error);
        toast.error("Error fetching donations. Please try again later.");
      });
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  return (
    <div data-aos="zoom-in" className="mt-10">
      <span className="text-1xl font-bold">Volunteers</span>
      <div className="bg-white p-4 rounded-lg overflow-x-auto">
        <div className="min-w-full">
          <div className="flex flex-col sm:flex-row shadow-md mt-10">
            <span className="font-bold w-full sm:w-1/4 text-sm p-2">first</span>
            <span className="font-bold w-full sm:w-1/4 text-sm p-2">lastname</span>
            <span className="font-bold w-full sm:w-1/4 text-sm p-2">
             email
            </span>
            <span className="font-bold w-full sm:w-1/4 text-sm p-2">
              amount
            </span>
          </div>
          {donations.map((donations) => (
            <div
              className="flex flex-col sm:flex-row mt-4 border-b"
              key={donations._id}
            >
              <span className="w-full sm:w-1/4 text-sm p-2">
                {donations._id}
              </span>
              <span className="w-full sm:w-1/4 text-sm p-2">
                {donations.amount}
              </span>
              <span className="w-full sm:w-1/4 text-sm p-2">
                {donations.fistname}
              </span>
              <span className="w-full sm:w-1/4 text-sm p-2">
                {donations.className}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Volunteer
