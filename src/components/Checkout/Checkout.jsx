import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Checkout = () => {
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
            <form>
              <div className="mb-4">
                <label htmlFor="country" className="block font-medium mb-1">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="town" className="block font-medium mb-1">
                  Town
                </label>
                <input
                  type="text"
                  id="town"
                  name="town"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="streetAddress"
                  className="block font-medium mb-1"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="state" className="block font-medium mb-1">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="postcode" className="block font-medium mb-1">
                  Postcode
                </label>
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
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
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <Link to="/Payment">
                <button
                  type="submit"
                  className="bg-primary text-white w-full py-2 rounded-md hover:bg-primary"
                >
                  Place order
                </button>
              </Link>
            </form>
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
