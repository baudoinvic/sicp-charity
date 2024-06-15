
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-us">
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <div
          data-aos="zoom-in"
          className="container mx-auto flex flex-col md:flex-row items-center justify-center py-8 mt-10"
        >
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src="https://assets-global.website-files.com/5fff1b1358bb914db4cb82f3/6053b1a7b7a1931385a35d84_charity%20water%202.png"
              alt="About Us Image"
              className="h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Right Side - Text */}
          <div className="w-full md:w-1/2 md:ml-8 mt-4 md:mt-0">
            <h2 className="text-3xl font-bold mb-4 text-primary">ABOUT US</h2>
            <p className="text-gray-700 leading-relaxed">
              The Solidarity Initiative for Children and People (SICP) is a
              charity non-profit organization founded by Winifred
              Nyirahabarugira in 2023 in Rwanda. Our mission is to help
              marginalized individuals and families, especially children, youth,
              and women, to alleviate poverty and achieve equality in society.
              Starting in Rwanda and Uganda, we aim to expand our efforts
              globally to support those in need of assistance and hope.
            </p>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 mt-10"
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="mb-10">
              <h2 className="text-4xl font-bold mb-4 text-primary">
                OUR STORY
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Poverty, disease, homelessness, and other challenges impact many
                individuals and families worldwide. Founded as a
                non-governmental organization, we strive to bring hope and
                support to those in need.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-4 text-primary">
                Who Can Donate?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Anyone who believes in our mission and values can contribute to
                our cause, whether through financial donations, goods, or
                services. Your support helps transform lives and build brighter
                futures.
              </p>
              <Link to="/donation">
                <button className="bg-primary text-white font-bold py-3 px-6   transition duration-300">
                  Donate Now
                </button>
              </Link>
            </div>
          </div>

          <div className="md:w-2/5">
            <img
              src="https://media.istockphoto.com/id/1499735039/photo/group-of-happy-african-children-orphanage-in-nairobi-kenya-east-africa.jpg?s=612x612&w=0&k=20&c=glXFgr6ata07ZSb9fc2djm0YBw89WFanvG8iJ8ajAQQ="
              alt="About Us Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className=" py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                OUR MISSION
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                Solidarity Initiative for Children and People (SICP) is aims to
                get poor people and marginalized people out from poverty with
                charity works, lead them to meaningful woks which get incomes,
                in order to reload their belief in their lives, with goal to
                step them to the level of others like: job, welfare, education,
                economic and development
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                OUR VISION
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                Education, economies and development will be a great tools of
                social empowerment, liberty and justice and reconciliation. We
                believe every human being should have opportunity to success in
                life.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                OUR VALUES
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                Working together Helping suffering people No discrimination
                (races) Belief Truth Faith in God
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}

      {/* Who Can Donate Section */}

      <Footer />
    </div>
  );
};

export default About;
