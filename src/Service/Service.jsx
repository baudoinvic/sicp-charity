

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import pic15 from "../assets/women/pic15.jpg";
import pic20 from "../assets/women/pic20.jpg";
import pic26 from "../assets/women/pic26.jpg"
import pic31 from "../assets/women/pic31.jpg";
import pic32 from "../assets/women/pic32.jpg";
import pic33 from "../assets/women/pic33.jpg";
import copy from "../assets/women/copy.jpg";

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
        <h1 className="text-6xl font-bold text-white">What We Do</h1>
      </header>

      <span className="block w-11/12 sm:w-2/3 mx-auto text-center text-gray-700 leading-relaxed p-4 sm:pt-20 text-sm ">
        We train vulnerable peoples from various backgrounds on how to embark on
        decent works that generate reliable incomes. We educated on social and
        environmental studies in order to foster peace, unity and sustainable
        development amongst our community. We further educate poor families
        through guidance provision on how to better care for their children from
        their infancy stage to their adulthood for their bright future. We also
        provide spiritual guidance to our community in terms of giving essence
        to the universe and its creator, in this regard we cultivate peace and
        love and obedience that give a life a true meaning and purpose amongst
        our community as well as the youngsters. Lastly we do the fundraising of
        money to support the abovementioned community.
      </span>

      <main
        data-aos="zoom-in"
        className="container mx-auto py-16 px-4 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10"
      >
        <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src={pic15}
            alt="Picture 15"
          />
          <h2 className="text-2xl font-bold text-center mb-6 mt-5">
            We train youth
          </h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto text-sm">
            We train youth and women in different aspect of life on how get
            decent self-created jobs that generate dependable income. We
            psychological train them how to become self-confident and help them
            toward the revelation of their self-awareness in whatever they do in
            society. Moreover we use social and environmental studies to teach
            them how they can be full prepared to harmonize with ecosystem in
            better way, and how to grow their interpersonal excellence, social
            development skills and prosper peace and unity interaction among
            them.
          </p>
        </section>

        {/* Section: Our Impact */}
        <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src={copy}
            alt="Picture 26"
          />
          <h2 className="text-2xl font-bold text-center mb-6 mt-5">Fundraising</h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto text-sm">
            We do fundraising of money in order to help those ones who are in
            needs of support. We educate families through guidance provision on
            how to better care for their children from their infancy stage to
            their adulthood. We assist patients, widows, refugees and others
            vulnerable by helping them to stand ten feet tall again.
          </p>
        </section>

        <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src={pic20}
            alt="Picture 20"
          />
          <h2 className="text-2xl font-bold text-center mb-6 mt-5">
            Empowerment and Promotion
          </h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto text-sm">
            We ceaselessly promote peace, reconciliation, autonomy, liberty,
            justice, and equity and gender equality for women in their
            respective social gatherings and lives as a pathway to foster a
            community with strong and empowered women.
          </p>
          {/* <Link to="/contact">
            <button className="bg-primary text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
              Support Us
            </button>
          </Link> */}
        </section>
      </main>

      <section className="mb-10">
        <div className="container mx-auto px-4">
          <p className="text-center max-w-3xl mx-auto text-lg  text-gray-700 leading-relaxed mb-12 animate-fade-in-up">
            We empower women from marginalized and underprivileged backgrounds,
            equipping them with essential skills to nurture their children from
            infancy through adulthood.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
            {[pic32, pic33, pic31].map((pic, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-xl"
              >
                <img
                  src={pic}
                  className="w-full md:w-80 h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                  alt={`Empowering families ${index + 1}`}
                />
              
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Service;
