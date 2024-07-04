
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const Donations = () => {
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

 
  const handleDonations = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      let token = localStorage.getItem("token");
      axios({
        url: `https://auction-website-auji.onrender.com/api/v1/donations/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          toast.success("Product deleted successfully");
          console.log(response, "Response");
        })
        .catch((error) => {
          toast.error(error.response.data.message);
          console.log(error, "Error");
        });
    }
  };

  return (
    <div data-aos="zoom-in" className="mt-10">
      <span className="text-1xl font-bold">Donations</span>
      <div className="bg-white p-4 rounded-lg overflow-x-auto">
        <div className="min-w-full">
          <div className="flex flex-col md:flex-row shadow-md mt-10">
            <span className="font-bold w-full md:w-1/6 text-sm p-2">
              Donor name
            </span>
            <span className="font-bold w-full md:w-1/6 text-sm p-2">
              Donation amount
            </span>
            <span className="font-bold w-full md:w-1/6 text-sm p-2">
            
             Email
            
            </span>
            <span className="font-bold w-full md:w-1/6 text-sm p-2">
             location
            </span>
            <span className="font-bold w-full md:w-1/6 text-sm p-2">City</span>
            <span className="font-bold w-full md:w-1/6 text-sm p-2">
              Action
            </span>
          </div>
          {donations.map((donations) => (
            <div
              className="flex flex-col md:flex-row mt-4 border-b"
              key={donations._id}
            >
              <span className="w-full md:w-1/6 text-sm p-2">
                {donations.firstname}
              </span>
              <span className="w-full md:w-1/6 text-sm p-2">
                {donations.lastname}
              </span>
              <span className="w-full md:w-1/6 text-sm p-2">
                {donations.amount}
              </span>
              <span className="w-full md:w-1/6 text-sm p-2">
                {donations.amount}
              </span>
             
              <div className="w-full md:w-1/6 flex flex-col md:flex-row items-center p-2">
               
                <div className="flex items-center">
                  <Link
                    to={`/Admindashboard/Dashboard/Editproduct/${donations._id}`}
                  >
                    <FaEdit
                      className="text-2xl text-gray-900 mr-2"
                      style={{ cursor: "pointer" }}
                    />
                  </Link>
                  <MdDeleteOutline
                    onClick={() => handleDonations(donations._id)}
                    className="text-2xl text-red-500"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Donations;

