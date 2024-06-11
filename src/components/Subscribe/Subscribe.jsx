import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";
import { useState } from "react";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {

  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10 mb-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl  font-semibold">
            Get Notified About Our Events
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 gap-4">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter your email"
              required
              className="w-full p-3"
             
            />
            <button
              
              className="bg-white text-black px-4 py-2 rounded-md"
            >
              Submit
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
