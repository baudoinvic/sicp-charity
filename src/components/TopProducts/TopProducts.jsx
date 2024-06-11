import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div data-aos="zoom-in">
      <div className="bg-gray-100 py-12">
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
            <form className="bg-gray-100 ">
              <div className="flex flex-col md:flex-row mb-4">
                <div className="w-full md:w-1/2 mr-0 md:mr-4 mb-4 md:mb-0">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row mb-4">
                <div className="w-full md:w-1/2 mr-0 md:mr-4 mb-4 md:mb-0">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-primary text-white py-2 px-4 rounded-md"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
