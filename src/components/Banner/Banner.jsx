import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
// import Video from "../Video/Video";

const Banner = () => {
  return (
    <div data-aos="zoom-in">
      <div className="py-12">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">RECENT CAUSES</h1>
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet, vitae mattis vehicula scelerisque
              suscipit donec, tortor duis phasellus vivamus wisi placerat
              <br />
              pellentesque augue leo. Orci nullam, nonummy nam sed, sapien
              temporibus ac ac, velit ante volutpat enim
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
                    CLEAN WATER FOR CHILD
                  </h2>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, vitae mattis vehicula
                    scelerisque suscipit donec, tortor duis phasellus vivamus
                    wisi
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
                    EDUCATION FOR CHILD
                  </h2>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, vitae mattis vehicula
                    scelerisque suscipit donec, tortor duis phasellus vivamus
                    wisi
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
                    Lorem ipsum dolor sit amet, vitae mattis vehicula
                    scelerisque suscipit donec, tortor duis phasellus vivamus
                    wisi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Video /> */}
      </div>
    </div>
  );
};

export default Banner;
