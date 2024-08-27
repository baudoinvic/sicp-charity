
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import pic15 from "../assets/women/pic15.jpg";

const Youth = () => {
  return (
    <>
      <div className="youth min-h-screen">
        <Navbar />
        <section className="container mx-auto flex flex-col lg:flex-row items-center p-8 bg-white rounded-lg  my-10 ml-20">
        
          <div className="lg:w-1/3 w-full">
            <img
              className="w-full h-64 lg:h-auto object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              src={pic15}
              alt="Picture 15"
            />
          </div>

          {/* Text on the right side */}
          <div className="lg:w-1/2 w-full lg:pl-8 mt-8 lg:mt-0">
            <h2 className="text-3xl font-bold mb-6">We Train Youth</h2>
            <p className="text-gray-700 leading-relaxed text-sm mb-8">
              We have trained more than 50 students after two years and helped
              them to get jobs successfully. We have been highly successful in
              bringing education and vocational training to students living in
              rural areas. Most of our graduates have found jobs earning a
              decent salary. We have two community colleges that offer
              job-oriented programs for the last ten years to young men and
              women who could not pursue college degrees due to poverty. It is
              also a wonderful opportunity for school dropouts to enroll in
              career-based training. The majority of the beneficiaries are
              marginalized in the communities who otherwise struggle to find
              daily labor. Programs such as Nursing Assistance, Tailoring, and
              Fashion Design are popular. More than 50 trainees have received
              job offers with a decent salary of $100 to $200 per month.
              Empowering Youth For A Bright Future: Every Effort Counts. Our aim
              is to develop capable, job-ready graduates by offering several
              practical programs in technology and community service. We aim for
              a big number of graduating students from the Vocational Training
              Program in the future to find jobs earning as much as $300.00 per
              month. This will be excellent for our people as starting a job is
              a closer step out of poverty. So far, women have benefited greatly
              from finding jobs as nursing assistants and tailors. 60% of our
              candidates are successful in getting placements in cooperatives
              throughout the country.
            </p>
            {/* Button positioned below the text */}
            <Link to="/Donation">
              <button className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300">
                Donate Now
              </button>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Youth;

