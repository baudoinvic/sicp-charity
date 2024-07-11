
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const TopProducts = ({ handleOrderPopup }) => {
const [formData, setFormData] = useState({
  firstname: "",
  lastname: "",
  email: "",
  address: "",
  message: "",
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
      url: "https://auction-website-auji.onrender.com/api/v1/contacts",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify(formData),
    });

    console.log("Response Data:", response.data);
    toast.success("Thank you for your feedback");
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error);
    toast.error("Failed to send message. Please try again later.");
  }
};

  return (
    <div data-aos="zoom-in">
      <div className="py-12 bg-white shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://media.istockphoto.com/id/490592864/photo/african-boy-in-need-for-clean-water.jpg?s=612x612&w=0&k=20&c=yFCXj_EkP2X_EH_7aNhxVFtQlt5OedQxYqxcKDy2uuc="
              alt="African Boy"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 md:ml-8">
            <h2 className="text-2xl font-bold mb-4">Give your hand</h2>
            <h3 className="text-xl font-bold mb-6">BECOME A VOLUNTEER</h3>
            <form onSubmit={handleSubmit} className="bg-white">
              <div className="flex flex-col md:flex-row mb-4">
                <div className="w-full md:w-1/2 mr-0 md:mr-4 mb-4 md:mb-0">
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First name"
                    required
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last name"
                    required
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row mb-4">
                <div className="w-full md:w-1/2 mr-0 md:mr-4 mb-4 md:mb-0">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    required
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    required
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary "
                  placeholder="Please share with us your interterst"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-white py-2 px-4 rounded-md"
              >
                Submit Now
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;

