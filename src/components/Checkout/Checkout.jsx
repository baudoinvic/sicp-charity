import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';

const Checkout = () => {

 const [formData, setFormData] = useState({
   country: "",
   town: "",
   email: "",
   street: "",
   state: "",
   postcode: "",
 });

 const handleChange = (e) => {
   const fieldName = e.target.name;

   setFormData({
     ...formData,
     [fieldName]: e.target.value,
   });
 };

 const handleSubmit = async (e) => {
   e.preventDefault();

   try {
     let token = localStorage.getItem("token");
     console.log("Request Data:", formData);

     const response = await axios({
       url: "https://beathaecommerceback-end.onrender.com/api/v1/billing",
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
       },
       data: JSON.stringify(formData),
     });

     console.log("Response Data:", response.data);
     toast.success("place order succssfully");
   } catch (error) {
     console.error("Error:", error.response ? error.response.data : error);
     toast.error("Failed to place order. Please try again later.");
   }
 };



  return (
    <>
      <Navbar />
      <div data-aos="zoom-in">
        <div className="checkout flex flex-col md:flex-row mt-10 md:mx-auto md:max-w-4xl">
          <div className="left-side flex-none md:w-1/2 mr-4 mb-4 md:mb-0">
            <img
              src="https://media.istockphoto.com/id/1671142169/vector/web-phishing-illustration-on-mobile-concept.jpg?s=612x612&w=0&k=20&c=XDfAqPBBiHFZCbEqUZognNbY4XTD-XTpacgjmH-Q-sA="
              alt="Cyclist"
              className="h-full object-cover"
            />
          </div>
          <div className="right-side w-full md:w-1/2 mx-auto p-6 shadow-md">
            <h1 className="text-2xl font-bold mb-4">BILLING ADDRESS</h1>
            <form onSubmit={handleSubmit}> 
              <div className="mb-4">
                <label htmlFor="country" className="block font-medium mb-1">
                  Country
                </label>
                <input
                  type="country"
                  id="country"
                  name="country"
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-1">
                  Town
                </label>
                <input
                  type="town"
                  id="town"
                  name="town"
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="street" className="block font-medium mb-1">
                  Street
                </label>
                <input
                  type="street"
                  id="street"
                  name="street"
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="state" className="block font-medium mb-1">
                  State
                </label>
                <input
                  type="state"
                  id="state"
                  name="state"
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="postcode" className="block font-medium mb-1">
                  Postcode
                </label>
                <input
                  type="postcode"
                  id="postcode"
                  name="postcode"
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              {/* <Link to="/Payment"> */}
              <button
                type="submit"
                className="bg-primary text-white w-full py-2 rounded-md hover:bg-primary"
              >
                Place order
              </button>
              {/* </Link> */}
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Checkout
