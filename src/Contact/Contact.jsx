import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="contact-us">
      <Navbar />
      <div className="sign-up">
        <div data-aos="zoom-in">
          <div className="checkout flex flex-col md:flex-row mt-10 md:mx-auto md:max-w-4xl">
            <div className="left-side flex-none md:w-1/2 mr-0 md:mr-4 mb-4 md:mb-0">
              <img
                src="https://media.istockphoto.com/id/1671142169/vector/web-phishing-illustration-on-mobile-concept.jpg?s=612x612&w=0&k=20&c=XDfAqPBBiHFZCbEqUZognNbY4XTD-XTpacgjmH-Q-sA="
                alt="Cyclist"
                className="h-full object-cover"
              />
            </div>
            <div className="right-side w-full md:w-1/2 mx-auto p-6 shadow-md">
              <h1 className="text-2xl font-bold mb-4">Let's get in touch</h1>
              <span className='text-gray-500'>
                Leave us a message if you have a question we are here to help
                you
              </span>
              <form className='mt-5'>
                <div className="mb-4">
                  <label htmlFor="firstname" className="block font-medium mb-1">
                    Firstname
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="lastname" className="block font-medium mb-1">
                    Lastname
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
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

                <button
                  type="submit"
                  className="bg-primary text-white w-full py-2 rounded-md hover:bg-primary"
                >
                  Send message
                </button>
              </form>
              <div className="social-media flex mt-10">
                <FaFacebook className='mr-5 text-2xl' />
                <FaInstagram className='mr-5 text-2xl' />
                <FaLinkedin  className='text-2xl' /> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Contact
