
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Contact() {
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
    <>
      <Navbar />

      <div className="contact-page bg-gray-100 ">
        <div
          className="hero-section h-screen bg-cover bg-center flex flex-col justify-center items-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center relative z-10 mb-6 leading-tight">
            Let's Get in Touch
          </h1>
          <p className="text-xl text-gray-200 text-center relative z-10 mb-12 max-w-3xl px-6">
            Do you have a question or need some more information about our
            organization? We are here to help. Fill out the form below and let's
            start a conversation that could lead to great impact in our
            community and make this world a better place.
          </p>
        </div>

        <div
          data-aos="zoom-in"
          id="contact-form"
          className="container mx-auto px-4 py-20 -mt-48 relative z-20"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 bg-primary text-white p-12">
              <h2 className="text-4xl font-bold mb-6">
                We'd Love to Hear from You
              </h2>
              <p className="text-lg mb-8">
                Whether you are a beginner to working with a charity
                organization like ours or an experienced kind hearted donor,
                your journey with us begins here. Share your thoughts, advices
                and let's create something extraordinary together, something
                that will always be hold tenderly in the hearts of our
                community.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <IoLocationOutline className="text-4xl text-white opacity-80" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Address</h3>
                    <p className="text-sm leading-relaxed opacity-80">
                      Paroisse St Famille Central St Dominic 32
                      <br />
                      FW+4JH Gatsata Road, vers Byumba, Kigali
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MdOutlineMailOutline className="text-4xl text-white opacity-80" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Write to Us</h3>
                    <p className="text-sm opacity-80">
                      winifredn@solinitiativecp.org.
                    </p>
                    <a
                      href="mailto:winifredn@solinitiativecp.org.

"
                      className="text-sm font-medium underline hover:text-gray-200 transition-colors inline-block mt-2"
                    >
                      Send an Email
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaPhoneAlt className="text-3xl text-white opacity-80" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                    <p className="text-sm opacity-80"> +250793017617 </p>
                    <a
                      href="tel:+32498778291"
                      className="text-sm font-medium underline hover:text-gray-200 transition-colors inline-block mt-2"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 p-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-brightColor focus:bg-white focus:ring-0"
                      placeholder="e.g., Marie"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastname"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-brightColor focus:bg-white focus:ring-0"
                      placeholder="e.g., Dupont"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-brightColor focus:bg-white focus:ring-0"
                    placeholder="you@example.com"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Address
                  </label>
                  <input
                    type="tel"
                    id="address"
                    name="address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-brightColor focus:bg-white focus:ring-0"
                    placeholder="Your Address"
                    onChange={handleChange}
                    required
                  />
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
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-brightColor focus:bg-white focus:ring-0"
                    placeholder="Please share with us your thoughts"
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-brightColor-dark transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brightColor focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;

