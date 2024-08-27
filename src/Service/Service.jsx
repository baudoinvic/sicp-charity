

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import pic15 from "../assets/women/pic15.jpg";
import pic20 from "../assets/women/pic20.jpg";


const Service = () => {
  return (
    <div className="what-we-do">
      <Navbar />

     
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
         
        </section>
      </main>

    

      <Footer />
    </div>
  );
};

export default Service;
