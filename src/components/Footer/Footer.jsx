

import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import pic1 from "../../assets/pic1.jpg";
import code from "../../assets/women/code.jpg";
import save from "../../assets/women/save.jpg";

const Footer = () => {
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
      toast.success("Thank you for subscribing to our News letter");
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      toast.error("Failed to subscribe. Please try again later.");
    }
  };
  return (
    <div className="bg-gray-900 text-white rounded-t-3xl mt-8 md:mt-0 shadow-2xl">
      <div className="container mx-auto p-8 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img src={save} alt="Logo" className="w-10 rounded-full" />
              <h3 className="font-bold text-lg text-primary ">
                Solidarity Initiative
                <br />
                for Children and People(SICP)
              </h3>
            </div>

            <p className="text-gray-300">
              Together, we can make a lasting
              <br /> impact and create a brighter future
              <br /> for children and people in need.
            </p>
            <div>
              <p className="text-lg font-semibold mb-3">
                Subscribe to our News letter
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brightColor"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition duration-300 shadow-md"
                >
                  Subscribe
                </button>
              </form>
              <ToastContainer />
            </div>
            <div className="">
              <h3>Follow us</h3>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/sicpcharity?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiFacebook className="cursor-pointer text-3xl hover:bg-primary" />
                </a>
                <a
                  href="https://youtube.com/@sicpcharity?si=Pmw5ZNp2pR7CWm5V"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="cursor-pointer text-3xl hover:bg-primary" />
                </a>
                <a
                  href="https://www.instagram.com/sicpcharity?igsh=MXZiY2g5MzJkeW84cg=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="cursor-pointer text-3xl hover:bg-primary " />
                </a>

                <a
                  href="https://x.com/chrisbi33?s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="cursor-pointer text-3xl hover:bg-primary" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">
              Important Links
            </h2>
            <nav className="space-y-3">
              <Link
                to="/Home"
                className="block text-gray-300 hover:text-primary transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/About"
                className="block text-gray-300 hover:text-primary transition duration-300"
              >
                About
              </Link>
              <Link
                to="/service"
                className="block text-gray-300 hover:text-primary transition duration-300"
              >
                What we do
              </Link>
              <Link
                to="/Donation"
                className="block text-gray-300 hover:text-primary transition duration-300"
              >
                Donate
              </Link>
              <Link
                to="/contact"
                className="block text-gray-300 hover:text-primary transition duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Links</h2>
            <nav className="space-y-3">
              <Link
                to="/funraise"
                className="block text-gray-300 hover:text-primary transition duration-300"
              >
                Our Campaigns
              </Link>
              <Link
                to="/compaign"
                className="block text-gray-300 hover:text-primary transition duration-300"
              >
                Our impact
              </Link>
              <Link
                to="/service"
                className="block text-gray-300 hover:text-primary transition duration-300"
              >
                What We Do
              </Link>
              <Link
                to="/About"
                className="block text-gray-300 hover:text-primary transition duration-300"
              >
                About us
              </Link>
              <Link
                to="/Donation"
                className="block text-gray-300 hover:text-primary transition duration-300"
              >
                Donation
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Contact</h2>
            <p className="mb-4 text-gray-300  hover:text-primary transition duration-300 flex items-center mr-10">
              Chief Executive Officer
            </p>
            <nav className="space-y-4">
              <a
                href="mailto: winifredn@solinitiativecp.org
"
                className="block text-gray-300 hover:text-primary transition duration-300 flex items-center"
              >
                <MdOutlineMailOutline className="text-2xl mr-3" />
                winifredn@solinitiativecp.org
              </a>
              <a
                href="tel: +250793017617"
                className="block text-gray-300 hover:text-primary transition duration-300 flex items-center"
              >
                <FaPhoneAlt className="text-xl mr-3" />
                 +250793017617
              </a>
              <a
                href="https://goo.gl/maps/yourAddress"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-primary transition duration-300 flex items-start"
              >
                <IoLocationOutline className="text-2xl mr-3 mt-1" />
                <span>
                  Paroisse St Famille Central
                  <br /> St Dominic 32
                  <br /> FW+4JH Gatsata Road
                  <br /> vers Byumba, Kigali
                </span>
              </a>
            </nav>
            <div className="pt-10">
              <img
                src={code}
                className="w-32 h-32 rounded-lg ml-10 p"
                alt="Description"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Solidarity Initiative for Children and People(SICP)
              |copyright
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
