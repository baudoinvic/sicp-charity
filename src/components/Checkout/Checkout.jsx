import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';

const Checkout = () => {
  return (
    <>
      <Navbar />
      <div data-aos="zoom-in">
        <div className="checkout flex mt-10" style={{ marginLeft: "20rem" }}>
          <div className="left-side flex-none mr-4">
            <img
              src="https://media.istockphoto.com/id/1466459662/video/tracking-shot-cyclist-cycling-uphill-on-road-in-sunrise-mountains.jpg?s=640x640&k=20&c=bD22c_TNoQX08hFKhaLZUvCg1AgepEypRwIvUGrlBmc="
              alt="Cyclist"
              className="h-full object-cover"
            />
          </div>
          <div className="right-side max-w-md mx-auto p-6 shadow-md w-96 ml-4">
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
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
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
