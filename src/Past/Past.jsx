import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Past = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-2xl font-bold text-center text-primary mb-12 leading-tight">
          Visiting Unaccompanied Patients at Hospitals
        </h1>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <p className="text-1xl text-gray-700 leading-relaxed mb-6">
            We plan to visit and assist the unaccompanied patients at MUHIMA
            Hospital. Our mission is to provide comfort, care, and support to
            those who may be feeling lonely or isolated during their hospital
            stay.
          </p>

          <h2 className="text-2xl font-semibold text-primary mb-4">
            Our Planned Activities:
          </h2>

          <ul className="list-disc list-inside text-1xl text-gray-700 leading-relaxed mb-6 space-y-2">
            <li>
              Help patients with personal care, including assisting with showers
              and changing into clean clothes
            </li>
            <li>
              Offer words of encouragement and hope to boost morale and reduce
              feelings of loneliness
            </li>
            <li>
              Provide nutritious meals and snacks to support patients' recovery
            </li>
            <li>
              Offer financial assistance for medications to patients struggling
              with hospital bills
            </li>
          </ul>

          <p className="text-1xl text-gray-700 leading-relaxed italic">
            Through these acts of kindness, we aim to make a positive impact on
            the lives of unaccompanied patients, showing them that they are not
            forgotten and that their community cares about their well-being.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Past;
