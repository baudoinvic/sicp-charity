

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import pic28 from "../assets/women/pic28.jpg";
import pic29 from "../assets/women/pic29.jpg";
import pic30 from "../assets/women/pic30.jpg";
import pic14 from "../assets/women/pic14.jpg";

const Funraise = () => {
 

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center text-center">
        <h1 className="pt-20 mb-10 text-2xl font-bold text-gray-800">
          OUR IMPACT
        </h1>

        <div className="max-w-2xl mx-auto p-4">
          <span className="text-lg text-gray-700">
            Impact positive in our organizations since our beginning, many
            people have changed their minds after following our teachings of
            social study and social environment, and also the training for jobs
            which get incomes. Many of them became interested in making
            appliances and became reconciled because being lonely and fearing
            others has gone. They feel they are working together in peace and
            unity through charity work.
          </span>
        </div>
      </div>

      <main
        data-aos="zoom-in"
        className="container mx-auto py-16 px-4 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10"
      >
        <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src={pic14}
            alt="Picture 14"
          />
          <h2 className="text-2xl font-bold text-center mb-6">Sports</h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
            The sports and other training of our children, maked them to leave
            their lonely and today some of them become champion in our
            community.
            </p>
        </section>

        {/* Section: Our Impact */}
        <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src={pic29}
            alt="Picture 29"
          />
          <h2 className="text-2xl font-bold text-center mb-6">
            Teaching and Training
          </h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
            Trough charity works, teaching and different training had brougth
            reconciliation in them
          </p>
        </section>

        <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src={pic30}
            alt="Picture 30"
          />
          <h2 className="text-2xl font-bold text-center mb-6">Social</h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
            Trough training and social study and evironment , our youth today
            help elderly and some institution to protect environment
            and other works.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Funraise;

