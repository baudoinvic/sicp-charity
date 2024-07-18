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
      <div className="min-h-screen bg-gradient-to-br py-8">
        <div className="container mx-auto p-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">
            Events and Newsletters
          </h1>

          {/* Upcoming Events Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-2">
              Upcoming Events
            </h2>
            <div className="bg-white mb-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-3 text-indigo-600 w-2/4 text-primary">
                On 20 July 2024: Visiting Unaccompanied Patients at Hospitals
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We plan to visit and assist the unaccompanied patients at MUHIMA
                Hospital. We will help the patients to take showers and change
                to new clothes. We will also give those words of encouragement
                and hope to help them not to feel lonely and left. Furthermore,
                we will provide foods, snacks, and some pocket money to buy
                medications to those patients who are unable to afford hospital
                bills.
              </p>
           
            </div>
          </section>

          {/* Past Events Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-2">
              Past Events
            </h2>
            <div className="bg-white mb-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-3 text-primary w-2/4">
                On 27 April 2024: Provision of School Supplies to Children and
                Youth
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Planning to provide 20 children and 10 students in the secondary
                school the urgent and basic materials needed to fit in academia
                life such as pens, uniforms, notebooks, tickets, and school
                fees.
              </p>
            
            </div>
          </section>

          {/* Newsletters Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-2">
              Newsletters
            </h2>

            {/* Daily Newsletters */}
            <div className="bg-white mb-8 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-3 text-primary ">
                Daily: Environmental Courses
              </h3>
              <p className="text-gray-700 mb-2 font-medium">
                The Importance of Preserving and Conserving Green Grassland
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Globally, over-utilization of resources and climate change have
                caused increasingly serious ecological damage, including but not
                limited to losses of biodiversity and ecosystem stability,
                threatening the sustainability of ecological functions and
                services.
              </p>
            
            </div>

            {/* Weekly Newsletters */}
            <div className="bg-white mb-8 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-3 text-primary ">
                Weekly: Social Studies
              </h3>
              <p className="text-gray-700 mb-2 font-medium w-2/4">
                Cooperatives As A Path Way to The Women Sustainable Livelihoods
                and Empowerment
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Over the past two centuries cooperatives had been introduced to
                the world and ever since, the term cooperative has been
                developed in various form in different sectors in which human
                survival activities take places.
              </p>
           
            </div>

            {/* Monthly Newsletters */}
            <div className="bg-white mb-8 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-3 text-primary ">
                Monthly: Social Studies
              </h3>
              <p className="text-gray-700 mb-2 font-medium">
                Cooperatives in Pandemics, Food Security, War conflict and
                Climate Issues in Africa
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Cooperatives have an important role in increasing community
                resilience to climate change, wars, conflicts, and pandemics.
              </p>
         
            </div>

            {/* Subscription Form */}
            <div className="bg-white mb-8 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-3 text-primary">
                Subscribe to our Newsletter
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
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
                    className="bg-primary hover:bg-indigo-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <ToastContainer />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Event;
