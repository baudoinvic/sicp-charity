

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import pic7 from "../assets/women/pic7.jpg";
import pic3 from "../assets/women/pic3.jpg";
import pic4 from "../assets/women/pic4.jpg";
const Service = () => {
  return (
    <div className="what-we-do">
      <Navbar />

      {/* Hero Section */}
      <header
        className="hero bg-cover bg-center  h-96 flex items-center justify-center text-center "
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/cecc1b_4e0f99a994834b81bc3e86f11a515b4f~mv2.jpg/v1/fill/w_1583,h_453,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cecc1b_4e0f99a994834b81bc3e86f11a515b4f~mv2.jpg')",
        }}
      >
        <h1 className="text-5xl font-bold text-white">What We Do</h1>
      </header>

      <span className="block w-11/12 sm:w-2/3 mx-auto text-center text-gray-700 leading-relaxed p-4 sm:pt-20 text-sm sm:text-base md:text-lg">
        We train vulnerables in different knowledge within meaningful works that
        give incomes. We teach them social study and social environment in order
        to build peace, unity, and development, and teach these poor families
        how to care for their children from their infancy and to prepare their
        future. We teach them also to know God and to obey Him, in order that
        their children grow with love for God and love for their neighbors. We
        do fundraise money to support them.
      </span>

      <main
        data-aos="zoom-in"
        className="container mx-auto py-16 px-4 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10"
      >
        <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src={pic7}
            alt="Picture 7"
          />
          <h2 className="text-2xl font-bold text-center mb-6">
            We train youth
          </h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
            we train youth and women in different meaningful works which get
            incomes also as well, We train them in social study and sosial
            environment in order to get peace and unity
          </p>
        </section>

        {/* Section: Our Impact */}
        <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src={pic3}
            alt="Picture 3"
          />
          <h2 className="text-2xl font-bold text-center mb-6">Fundraising</h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
            we fundraise money in order to help those in their needs Teaching We
            teach familes how to care their children from their enfancy to adult
            and them to obey God Assistance We assist patients, widows, refugees
            and others vulnerable for having good health and stand well
          </p>
        </section>

        <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src={pic4}
            alt="Picture 4"
          />
          <h2 className="text-2xl font-bold text-center mb-6">Promoting</h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
            We promote peace, liberty, justice and reconciliation. Study for
            children and youth .We help children and youth in their study Water
            cleaning .We publish to all to clean water in order that everyone
            have good health especially to care our children
          </p>
          <Link to="/contact">
            <button className="bg-primary text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
              Support Us
            </button>
          </Link>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Service;
