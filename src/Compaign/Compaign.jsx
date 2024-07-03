import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

const Compaign = () => {
  const [modal, setModal] = useState(null);

  const showModal = (campaign) => setModal(campaign);
  const hideModal = () => setModal(null);

  return (
    <>
      <Navbar />
      <div className="min-h-screen ">
        <header
          className="bg-blue-600 text-white py-16 md:py-32"
          style={{
            backgroundImage:
              "url('https://static.wixstatic.com/media/cecc1b_4e0f99a994834b81bc3e86f11a515b4f~mv2.jpg/v1/fill/w_1583,h_453,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cecc1b_4e0f99a994834b81bc3e86f11a515b4f~mv2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto bg-opacity-75 bg-primary py-8 md:py-12 rounded-lg text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Support Our Causes
            </h1>
            <p className="mt-2 text-sm md:text-base lg:text-lg">
              Help us make a difference by donating to specific campaigns or
              through our general fundraising efforts.
            </p>
          </div>
        </header>

        <div className="flex justify-center items-center mt-20 px-4">
          <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
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
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 text-center">
              OUR MISSION
            </h3>
            <p className="mt-2 text-gray-600 text-center">
              Solidarity Initiative for Children and People (SICP) aims to get
              poor and marginalized people out of poverty through charity work,
              leading them to meaningful jobs that provide decent income. Our
              goal is to help them regain belief in their lives and achieve
              parity with others in terms of job opportunities, welfare,
              education, economic stability, and development.
            </p>
          </div>
        </div>

        <main className="container mx-auto py-8">
          <section data-aos="zoom-in" className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Fundraising
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  Children and Youth pupils
                </h3>
                <p className="mb-4">
                  Our Children at primary school and youth at high school
                  campaign focuses on providing educational resources, school
                  supplies, school fees and scholarships to underprivileged
                  children. By donating, you help these children get the
                  education they deserve, opening doors to a brighter future.
                </p>
                <button
                  onClick={() => showModal("children-students")}
                  className="bg-primary text-white py-2 px-4 rounded-lg"
                >
                  Learn More
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Youth</h3>
                <p className="mb-4">
                  The Youth campaign is dedicated to supporting young people
                  through mentorship programs, career training, and recreational
                  activities. Your donations help to empower youth, fostering
                  their development and ensuring that they have the skills and
                  opportunities to succeed.
                </p>
                <button
                  onClick={() => showModal("youth")}
                  className="bg-primary text-white py-2 px-4 rounded-lg"
                >
                  Learn More
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Women</h3>
                <p className="mb-4">
                  Our Women’s campaign focuses on empowering women through
                  education, job training, and support services. Donations to
                  this campaign help women to achieve financial autonomy, gain
                  confidence, and build a better future for themselves and their
                  families
                </p>
                <button
                  onClick={() => showModal("women")}
                  className="bg-primary text-white py-2 px-4 rounded-lg"
                >
                  Learn More
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Patients</h3>
                <p className="mb-4">
                  The Patients campaign aims to provide medical assistance,
                  medications, and support for individuals who cannot afford
                  healthcare. Your contributions help improve the quality of
                  life for patients by ensuring that they receive the necessary
                  medical care and support.
                </p>
                <button
                  onClick={() => showModal("patients")}
                  className="bg-primary text-white py-2 px-4 rounded-lg"
                >
                  Learn More
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      {modal === "children-students" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Children and Youth pupils
            </h3>
            <p className="w-2/3 mb-4 w-96">
              Detailed information about the Children and Youth pupils. This
              focuses on providing educational resources, school fees, supplies,
              and scholarships to underprivileged children. by supporting with
              this amount. 500.000 USD
            </p>
            <Link to="/donation">
              <button
                onClick={hideModal}
                className="bg-primary text-white py-2 px-4 rounded-lg"
              >
                Donate
              </button>
            </Link>
          </div>
        </div>
      )}
      {modal === "youth" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Youth</h3>
            <p className="mb-4">
              Detailed information about the Youth campaign. This campaign
              supports young people through mentorship programs, career
              training, and recreational activities. 300.000 USD
            </p>
            <Link to="/donation">
              <button
                onClick={hideModal}
                className="bg-primary text-white py-2 px-4 rounded-lg"
              >
                Donate
              </button>
            </Link>
          </div>
        </div>
      )}
      {modal === "women" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Women</h3>
            <p className="mb-4">
              Detailed information about the Women’s . this focuses on
              empowering women through education, job training, and healthcare
              by supporting with 350.000 USD
            </p>
            <Link to="/donation">
              <button
                onClick={hideModal}
                className="bg-primary text-white py-2 px-4 rounded-lg"
              >
                Donate
              </button>
            </Link>
          </div>
        </div>
      )}
      {modal === "patients" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Patients</h3>
            <p className="mb-4">
              Detailed information about the Patients. This aims to provide
              medical assistance, medications, and support for individuals who
              cannot afford healthcare. by supporting 200.000 USD
            </p>
            <Link to="/Donation">
              <button
                onClick={hideModal}
                className="bg-primary text-white py-2 px-4 rounded-lg"
              >
                Donate
              </button>
            </Link>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Compaign;
