
import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let token = localStorage.getItem("token");
      console.log("Newsletter Subscription Email:", email);

      const response = await axios({
        url: "https://auction-website-auji.onrender.com/api/v1/subscriptions",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: JSON.stringify({ email }),
      });

      console.log("Subscription Response Data:", response.data);
      toast.success(
        "Thank you for subscribing to our events, you will be notified soon"
      );

      // Clear the form
      setEmail(""); // Reset the email state to clear the input field
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      toast.error("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <div
      data-aos="zoom-in"
      className="mt-[-5rem] mb-8 bg-gray-100 dark:bg-gray-800 text-white relative"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-6">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About Our Events
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 gap-4">
              <input
                data-aos="fade-up"
                name="email"
                value={email}
                onChange={handleChange}
                type="text"
                placeholder="Enter your email"
                required
                className="w-full p-3"
              />
              <button className="bg-white text-black px-4 py-2 rounded-md">
                Submit
              </button>
            </div>
          </form>
          {/* <ToastContainer /> */}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
