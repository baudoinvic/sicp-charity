import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
  import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { useEffect,useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Donors = () => {

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
      <span className="text-1xl font-bold">Donors</span>
      <div className="bg-white p-4 rounded-lg">
        <div className="hidden md:flex shadow-md mt-10">
          <span className="font-bold w-1/4 text-sm">Firstname</span>
          <span className="font-bold w-1/4 text-sm">Lastnae</span>
          <span className="font-bold w-1/4 text-sm">Email</span>
          <span className="font-bold w-1/4 text-sm">Amount</span>
          <span className="font-bold w-1/4 text-sm">Action</span>
        </div>
        <div className="md:hidden flex flex-col">
          {donations.map((donations) => (
            <div
              className="border border-gray-300 rounded-lg p-4 mb-4"
              key={donations._id}
            >
              <div className="flex justify-between mb-2">
                <span className="font-bold text-sm">Fistname:</span>
                <span>{donations.firstname}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-sm">Lastname:</span>
                <span>{donations.lastname}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-sm">Email:</span>
                <span>{donations.email}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-sm">Amount:</span>
                <span>{donations.amount}</span>
              </div>
            
              <div className="flex justify-end">
                <FaEdit
                  className="text-2xl text-gray-900 mr-2"
                  style={{ cursor: "pointer" }}
                />
                <MdDeleteOutline
                  onClick={() => handleDeleteBillings(billings._id)}
                  className="text-2xl text-red-500"
                  style={{ cursor: "pointer" }}
                />
                <ToastContainer />
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:flex flex-col">
          {donations.map((donations) => (
            <div className="flex mt-10" key={donations._id}>
              <span className="w-1/4 text-sm">{donations.email}</span>
              <span className="w-1/4 text-sm">{donations.firstname}</span>
              <span className="w-1/4 text-sm">{donations.lastname}</span>
              <span className="w-1/4 text-sm">{donations.amount}</span>

              <div className="w-1/4 flex items-center">
                <FaEdit
                  className="text-2xl text-gray-900 mr-2"
                  style={{ cursor: "pointer" }}
                />
                <MdDeleteOutline
                  onClick={() => handleDeleteBillings(billings._id)}
                  className="text-2xl text-red-500"
                  style={{ cursor: "pointer" }}
                />
                <ToastContainer />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Donors
