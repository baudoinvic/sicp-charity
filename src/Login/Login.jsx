
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const fieldName = e.target.name;

    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const adminCredentials = {
      username: "Winfred",
      password: "123456",
    };

    try {
      let token = localStorage.getItem("token");
      console.log("Request Data:", formData);

      const response = await axios({
        url: "https://auction-website-auji.onrender.com/api/v1/auth",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: JSON.stringify(formData),
      });

      console.log("Response Data:", response.data);

      if (
        formData.username === adminCredentials.username &&
        formData.password === adminCredentials.password
      ) {
        toast.success("Admin login successful");
        navigate("/Admindashboard/Dashboard");
      } else {
        toast.success("Login successful");
        navigate("/"); 
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      toast.error("Failed to log in. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div data-aos="zoom-in" className="w-full md:w-4/5 lg:w-3/5 xl:w-1/2">
        <div className="checkout flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden">
          <div className="left-side flex-none md:w-1/2 relative">
            <img
              src="https://media.istockphoto.com/id/1671142169/vector/web-phishing-illustration-on-mobile-concept.jpg?s=612x612&w=0&k=20&c=XDfAqPBBiHFZCbEqUZognNbY4XTD-XTpacgjmH-Q-sA="
              alt="Cyclist"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <h2 className="text-4xl font-bold">Welcome Back</h2>
            </div>
          </div>
          <div className="right-side w-full md:w-1/2 p-8 bg-white">
            <Link to="/#" className="flex items-center mb-6">
              <IoMdArrowBack className="text-primary text-2xl mr-2" />
              <span className="text-primary font-semibold">Home</span>
            </Link>

            <h1 className="text-3xl font-bold mb-6">Sign in</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block font-medium mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-6">
                <span className="text-blue-500 hover:text-blue-700 cursor-pointer">
                  Forgot password?
                </span>
              </div>

              <button
                type="submit"
                className="bg-primary text-white w-full py-3 rounded-md hover:bg-primary-dark transition duration-300"
              >
                Sign in
              </button>

              <div className="mt-6 text-center">
                <span>Don't have an account?</span>
                <Link
                  to="/Signup"
                  className="text-primary ml-2 font-semibold hover:text-primary-dark transition duration-300"
                >
                  Sign up here
                </Link>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

