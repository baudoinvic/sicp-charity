import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
  import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { useEffect,useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Customer = () => {

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

const handleDeleteBillings = async (id) => {
  if (window.confirm("Are you sure you want to delete?")) {
    let token = localStorage.getItem("token");
    axios({
      url: `https://beathaecommerceback-end.onrender.com/api/v1/billing/${id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        toast.success("customer deleted successfully");
        console.log(response, "Response");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.log(error, "Error");
      });
  }
};


  
  return (
    

    <div data-aos="zoom-in">
      <span className="text-3xl font-bold">Customers</span>
      <div className="bg-white p-4 rounded-lg mt-10">
        <div className="flex shadow-md mt-10">
          <span className="font-bold w-1/4">Email</span>
          <span className="font-bold w-1/4">Country</span>
          <span className="font-bold w-1/4">Town</span>
          <span className="font-bold w-1/4">Street</span>
          <span className="font-bold w-1/4">State</span>
          <span className="font-bold w-1/4">postcode</span>
          {/* Added Product Image column */}
          <span className="font-bold w-1/4">Action</span>
        </div>
        {Billings.map((billings) => (
          <div className="flex mt-10" key={billings._id}>
            <span className="w-1/4">{billings.email}</span>
            <span className="w-1/4">{billings.country}</span>
            <span className="w-1/4">{billings.street}</span>
            <span className="w-1/4">{billings.state}</span>
            <span className="w-1/4">{billings.postcode}</span>
            
            <div className="w-1/4 flex items-center">
              <FaEdit
                className="text-2xl text-gray-900 mr-2"
                style={{ cursor: "pointer" }}
              />
              <MdDeleteOutline onClick={() =>handleDeleteBillings(billings._id)}
                className="text-2xl text-red-500"
                style={{ cursor: "pointer" }}
              />
              <ToastContainer />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Customer
