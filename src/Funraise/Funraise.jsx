

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import pic28 from "../assets/women/pic28.jpg";
import pic29 from "../assets/women/pic29.jpg";
import pic30 from "../assets/women/pic30.jpg";
import pic14 from "../assets/women/pic14.jpg";
import impact from "../assets/women/impact.png";

const Funraise = () => {
 

  return (
    <div className="min-h-screen">
      <Navbar />

      <h1 className="pt-20 mb-10 text-2xl font-bold text-primary text-center">
        OUR IMPACT
      </h1>

      <div className="flex flex-wrap justify-center p-4">
        <div className="w-full md:w-1/2 lg:w-1/2 p-4">
          <div className="max-w-2xl mx-auto p-4 left-side ">
            <span className="text-sm text-gray-700 ">
              Our organizations had emitted positive effect to our community, as
              many people have enriched their critical thinking after following
              our teachings of social and environment studies, and many of our
              community are now self-employed. Depression and loneliness is a
              tale in the lives of many of our community todays and
              self-confidence is prevalent. In the similar vein Reconciliation
              is a living testimony as our people are working together in peace
              and unity through charity and other activities of our
              organization. Moreover a reasonable number of children are being
              cared for in the proper way and their future is rest assured.
              Lastly but not the rest our organization impact outreached to at
              least 500 lives so far to better their living standards.
            </span>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 p-4">
          <div className="impact flex flex-col items-center my-4 right-side">
            <img
              src={impact}
              className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto"
              alt="Impact Image"
            />
            <div className="text-center mt-4">
              <span className="font-bold text-sm ">
                Children Education Supported: 260
              </span>
              <p className="font-medium text-sm">Empowered Women: 130</p>
              <p className="font-medium text-sm">
                Others supported (patients, refugees, elders etc.): 92
              </p>
              <p className="font-medium text-sm">Approached Associations: 18</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="text flex flex-col items-center text-center my-4 space-y-2 px-4 sm:px-8">
        <span className="font-bold text-lg sm:text-xl">
          Children Education Supported: 260
        </span>
        <p className="font-medium text-base sm:text-lg">Empowered Women: 130</p>
        <p className="font-medium text-base sm:text-lg">
          Others supported (patients, refugees, elders etc.): 92
        </p>
        <p className="font-medium text-base sm:text-lg">
          Approached Associations: 18
        </p>
      </div> */}

      <main
        data-aos="zoom-in"
        className="container mx-auto py-16 px-4 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10"
      >
        <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src={pic14}
            alt="Picture 14"
          />
          <h2 className="text-2xl font-bold text-center mb-4 pt-5 ">Sports</h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
            The sports and other trainings activities designated to our children
            had made them leave their depressing inner world and loneliness to
            embark in the world full of inner peace, laughter, genuine smile and
            hope of life in our community.
          </p>
        </section>

        {/* Section: Our Impact */}
        <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src={pic29}
            alt="Picture 29"
          />
          <h2 className="text-2xl font-bold text-center mb-6 pt-5">
            Teaching and Training
          </h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
            Through charity activities, teaching and different trainings, the
            spirit of reconciliation had taken off amongst our community
          </p>
        </section>

        <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            src={pic30}
            alt="Picture 30"
          />
          <h2 className="text-2xl font-bold text-center mb-6 pt-5">Social</h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
            Through trainings, social and environmental studies, our youth today
            help elderly and some institution to protect environment and
            contribute in other various social works.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Funraise;

