import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

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

        <main className="container mx-auto py-8">
          <section className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4">Campaign Overview</h2>
            <p className="mb-4">
              Our organization runs several campaigns aimed at helping different
              groups in need. Below you can find information about each campaign
              and how to contribute.<p>
                we do fundraising every month which means each month we do our best to funraise communities
              </p>
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">How to Donate</h2>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <p>
                You can choose to donate to a specific campaign or contribute to
                our general fundraising efforts. Select a category below to
                learn more and donate.
              </p>
            </div>
          </section>

          <section data-aos="zoom-in" className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              Fundraising Campaigns
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  Children and Students
                </h3>
                <p className="mb-4">
                  Our Children and Students campaign focuses on providing
                  educational resources, school supplies, and scholarships to
                  underprivileged children. By donating, you help these children
                  get the education they deserve, opening doors to a brighter
                  future.
                </p>
                <button
                  onClick={() => showModal("children-students")}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg"
                >
                  Learn More
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Youth</h3>
                <p className="mb-4">
                  The Youth campaign is dedicated to supporting young people
                  through mentorship programs, career training, and recreational
                  activities. Your donations help empower youth, fostering their
                  development and ensuring they have the skills and
                  opportunities to succeed.
                </p>
                <button
                  onClick={() => showModal("youth")}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg"
                >
                  Learn More
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Women</h3>
                <p className="mb-4">
                  Our Women’s campaign focuses on empowering women through
                  education, job training, and support services. Donations to
                  this campaign help women achieve financial independence, gain
                  confidence, and build a better future for themselves and their
                  families.
                </p>
                <button
                  onClick={() => showModal("women")}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg"
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
                  life for patients by ensuring they receive the necessary
                  medical care and support.
                </p>
                <button
                  onClick={() => showModal("patients")}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg"
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
              Children and Students
            </h3>
            <p className="mb-4">
              Detailed information about the Children and Students campaign.
              This campaign focuses on providing educational resources, school
              supplies, and scholarships to underprivileged children.
            </p>
            <button
              onClick={hideModal}
              className="bg-red-600 text-white py-2 px-4 rounded-lg"
            >
              Close
            </button>
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
              training, and recreational activities.
            </p>
            <button
              onClick={hideModal}
              className="bg-red-600 text-white py-2 px-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {modal === "women" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Women</h3>
            <p className="mb-4">
              Detailed information about the Women’s campaign. This campaign
              focuses on empowering women through education, job training, and
              support services.
            </p>
            <button
              onClick={hideModal}
              className="bg-red-600 text-white py-2 px-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {modal === "patients" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Patients</h3>
            <p className="mb-4">
              Detailed information about the Patients campaign. This campaign
              aims to provide medical assistance, medications, and support for
              individuals who cannot afford healthcare.
            </p>
            <button
              onClick={hideModal}
              className="bg-red-600 text-white py-2 px-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Compaign;
