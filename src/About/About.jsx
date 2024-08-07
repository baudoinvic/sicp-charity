
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import pic17 from "../assets/women/pic17.jpg";
import pic18 from "../assets/women/pic18.jpg";
import pic21 from "../assets/women/pic21.jpg";
import pic25 from "../assets/women/pic25.jpg";
import change from "../assets/women/change.jpg";

const About = () => {
  return (
    <div className="about-us">
      <Navbar />

      <section className="relative">
        <div
          data-aos="zoom-in"
          className="container mx-auto flex flex-col md:flex-row items-center justify-center py-6 mt-8"
        >
      
          <div className="w-full h-full md:w-2/5 mb-4 md:mb-0">
            <img
              src={pic25}
              alt="About Us Image"
              className="w-full h-full  object-cover rounded-lg shadow-md "
            />
          </div>

       
          <div className="w-full md:w-2/4 md:ml-8 mt-4 md:mt-0">
            <h2 className="text-2xl font-bold mb-3 text-primary">WHO WE ARE</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              The Solidarity Initiative for Children and People (SICP) is a
              Charity Non-profit and Non-governmental organization established
              in Rwanda in 2023. Our main aim is to help poor and marginalized
              people who suffer from various life-imposed uncertainties. We
              offer encouragement and support through charity activities,
              empowerment, and spiritual guidance, focusing primarily on
              children, as well as other vulnerable groups such as women,
              widows, unaccompanied hospital patients, and refugees within the
              East-African region. While our roots are in Rwanda, our reach
              extends beyond borders as we continue to expand. Many children,
              left-behind women, and others need our support. Together, we can
              make an unforgettable and huge positive impact on the lives of
              these less fortunate individuals. We believe that by joining
              hands, we can eradicate poverty and end global suffering. We
              invite you to work with us in this noble cause.
            </p>
          </div>
        </div>

        
      </section>

    

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
                <svg
                  className="w-6 h-6 text-indigo-600"
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
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                OUR MISSION
              </h3>
              <p className="mt-1 text-sm text-gray-600 text-center overflow-y-auto max-h-40">
                Solidarity Initiative for Children and People (SICP) aims to
                alleviate poverty for marginalized people through charity,
                focusing on vulnerable children and women. We also support
                self-employment initiatives to boost confidence and help
                individuals catch up with societal standards in job
                opportunities, welfare, education, and sustainable economic
                growth.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
                <svg
                  className="w-6 h-6 text-indigo-600"
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
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                OUR VISION
              </h3>
              <p className="mt-1 text-sm text-gray-600 text-center overflow-y-auto max-h-40">
                We envision education, social welfare, and economic growth as
                tools for social transformation, leading to empowerment,
                autonomy, liberty, justice, and reconciliation. We believe in
                providing opportunities for everyone to succeed in life and are
                committed to supporting this goal.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
                <svg
                  className="w-6 h-6 text-indigo-600"
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
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                OUR VALUES
              </h3>
              <p className="mt-1 text-sm text-gray-600 text-center overflow-y-auto max-h-40">
                Our core values include working together, helping those who
                suffer, non-discriminatory and non-racist behavior, and
                fostering our belief in Truth and Faith in the Almighty.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      <Footer />
    </div>
  );
};

export default About;
