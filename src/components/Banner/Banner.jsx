import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";


const Banner = () => {
  return (
    <div data-aos="zoom-in">
      <div className="py-12">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">RECENT CAUSES</h1>
            <p className="text-gray-600">
              Discover the latest initiatives we are passionately working on to
              make a positive impact in our communities.
              <br /> From providing essential resources to those in need to
              supporting educational programs and health services
              <br /> your contributions help us drive change and uplift lives.
              <br />
              Join us in our mission to create a brighter future for everyone.
              Every effort counts, and together, we can make a difference.
            </p>
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://charity-hand.netlify.app/img/causes/p4.jpg"
                  alt="Cause"
                  className="w-full h-96 object-cover"
                />

                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">
                    CLEAN WATER FOR CHILDREN
                  </h2>
                  <p className="text-gray-600">
                    Access to clean water is a fundamental human right, yet many
                    children around the world still suffer from water scarcity.
                    Our mission is to provide safe and clean drinking water to
                    children in underserved communities.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://charity-hand.netlify.app/img/causes/p5.jpg"
                  alt="Cause"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">
                    EDUCATION FOR CHILDREN
                  </h2>
                  <p className="text-gray-600">
                    Education is the key to breaking the cycle of poverty and
                    unlocking a brighter future. We are dedicated to providing
                    quality education to children in need, giving them the tools
                    and opportunities to succeed.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://charity-hand.netlify.app/img/causes/p4.jpg"
                  alt="Cause"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">
                    HELP SENIOR CITIZENS
                  </h2>
                  <p className="text-gray-600">
                    Our senior citizens deserve care, respect, and support in
                    their golden years. We are committed to enhancing the
                    quality of life for the elderly by providing essential
                    services and resources.
                  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Banner;
