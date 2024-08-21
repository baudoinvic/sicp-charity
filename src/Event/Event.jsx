import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Event = () => {
 
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
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br py-8 px-4 sm:px-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-left">
          Upcoming
        </h1>

       
        <div className="flex flex-col lg:flex-row justify-center py-12 space-y-8 lg:space-y-0 lg:space-x-4">
       
          <div className="w-full lg:w-1/4">
            <div className="flex flex-col items-start">
              <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48">
                <div className="bg-primary text-white p-4 text-center h-full flex flex-col justify-center">
                  <h2 className="text-2xl font-bold mb-2">Upcoming Event</h2>
                  <span className="text-lg">20 July 2024</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed w-full lg:w-2/3 text-sm">
                We plan to visit and assist the unaccompanied patients at MUHIMA
                Hospital. We will help the patients to take showers and change
                to new clothes. We will also give those words of encouragement
                and hope to help them not to feel lonely and left. Furthermore,
                we will provide foods, snacks, and some pocket money to buy
                medications to those patients who are unable to afford hospital
                bills.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/4">
            <div className="flex flex-col items-start">
              <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48">
                <div className="bg-primary text-white p-4 text-center h-full flex flex-col justify-center">
                  <h2 className="text-2xl font-bold mb-2">
                    Environmental Courses
                  </h2>
                  <span className="text-lg">10 August 2024</span>
                </div>
              </div>
              <p className="w-full lg:w-2/3 font-bold">
                The Importance of Preserving and Conserving Green Grassland
              </p>
              <p className="text-gray-700 leading-relaxed w-full lg:w-2/3 mt-3 text-sm">
                Globally, over-utilization of resources and climate change have
                caused increasingly serious ecological damage, including but not
                limited to losses of biodiversity and ecosystem stability,
                threatening the sustainability of ecological functions and
                services.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/4">
            <div className="flex flex-col items-start">
              <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48">
                <div className="bg-primary text-white p-4 text-center h-full flex flex-col justify-center">
                  <h2 className="text-2xl font-bold mb-2">
                    Weekly Social Studies
                  </h2>
                  <span className="text-lg">25 August 2024</span>
                </div>
              </div>
              <p className="w-full lg:w-2/3 font-bold">
                Cooperatives As A Path Way to The Women Sustainable Livelihoods
                and Empowerment
              </p>
              <p className="text-gray-700 leading-relaxed w-full lg:w-2/3 mt-3 text-sm">
                Over the past two centuries cooperatives had been introduced to
                the world and ever since, the term cooperative has been
                developed in various form in different sectors in which human
                survival activities take places.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/4">
            <div className="flex flex-col items-start">
              <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48">
                <div className="bg-primary text-white p-4 text-center h-full flex flex-col justify-center">
                  <h2 className="text-2xl font-bold mb-2">
                    Monthly Social Studies
                  </h2>
                  <span className="text-lg">27 April 2024</span>
                </div>
              </div>
              <p className="w-full lg:w-2/3 font-bold">
                Cooperatives in Pandemics, Food Security, War conflict and
                Climate Issues in Africa
              </p>
              <p className="text-gray-700 text-sm leading-relaxed w-full lg:w-2/3 mt-3">
                Cooperatives have an important role in increasing community
                resilience to climate change, wars, conflicts, and pandemics.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-2"></h2>
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-left">
          Past Events
        </h1>

        <section className="flex justify-start py-12">
          <div className="flex flex-col items-start max-w-md">
            <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48">
              <div className="bg-gray-100 text-black p-4 text-center h-full flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2">Past Events</h2>
                <span className="text-lg">27 April 2024</span>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed text-sm">
              <p className="font-bold mb-2">
                Provision of School Supplies to Children and Youth
              </p>
              <p>
                We plan to visit and assist the unaccompanied patients at MUHIMA
                Hospital. We will help the patients to take showers and change
                to new clothes. We will also give those words of encouragement
                and hope to help them not to feel lonely and left. Furthermore,
                we will provide foods, snacks, and some pocket money to buy
                medications to those patients who are unable to afford hospital
                bills.
              </p>
            </div>
          </div>
        </section>

        {/* <div className="bg-white mb-8 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-2/3 lg:w-2/6">
          <h3 className="text-2xl font-semibold mb-3 text-primary">
            Subscribe to our Newsletter
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                id="email"
                placeholder="Your Email Address"
                className="w-full p-2 border border-indigo-200 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
                value={email}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-indigo-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div> */}

        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Event;
