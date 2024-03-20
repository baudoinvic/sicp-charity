import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div data-aos="zoom-in">
        <div className="checkout flex mt-10" style={{ marginLeft: "20rem" }}>
          <div className="left-side flex-none mr-4">
            <img
              src="https://media.istockphoto.com/id/1671142169/vector/web-phishing-illustration-on-mobile-concept.jpg?s=612x612&w=0&k=20&c=XDfAqPBBiHFZCbEqUZognNbY4XTD-XTpacgjmH-Q-sA="
              alt="Cyclist"
              className="h-full object-cover"
            />
          </div>
          <div className="right-side max-w-md mx-auto p-6 shadow-md w-96 ml-4">
            <Link to="/Home">
              <div className="flex">
                <IoMdArrowBack className="text-primary mt-1 mr-2" />
                <span className="text-primary">Home</span>
              </div>
            </Link>

            <h1 className="text-2xl font-bold mb-4">Sign in</h1>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-1">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block font-medium mb-1">
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="">
                <span>Forgot password?</span>
              </div>

              <button
                type="submit"
                className="bg-primary text-white w-full py-2 rounded-md hover:bg-primary"
              >
                Sign in
              </button>
              <div className="">
                <span>Don't you have an account?</span>
                <span className="text-primary ml-4">Sign up here</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
