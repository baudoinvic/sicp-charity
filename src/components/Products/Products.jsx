
import React from "react";
import { Link } from "react-router-dom";
import { CgMediaPodcast } from "react-icons/cg";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { BsSendCheck } from "react-icons/bs";




const Products = () => {
  return (
  
    <div className=" py-12">
      <div data-aos="zoom-in">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://media.istockphoto.com/id/485631073/photo/nigerian-boys-and-girls.jpg?s=612x612&w=0&k=20&c=rJ3a3ZipBID-JtejPpNLmhFGmq9jZqlrZ_MrqgBREe8="
              alt="Placeholder"
              className="rounded-lg shadow-md"
            />
            <div className="flex space-x-10 items-center mt-6">
              <h2 className="text-2xl font-bold">HELP FOR HOMELESS CHILD</h2>
              <button className="bg-primary text-white py-2 px-4 rounded-md">
                DONATE NOW
              </button>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="w-full md:w-1/2 md:ml-8">
            <h2 className="text-3xl font-bold mb-6">HOW TO HELP US</h2>
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <BsSendCheck className="text-2xl mr-4 text-primary" />
                <h3 className="text-xl font-bold">SEND DONATION</h3>
              </div>
              <p>
                Please send us donations to help our children grow up and pursue
                their careers.
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <CgMediaPodcast className="text-2xl mr-4 text-primary" />
                <h3 className="text-xl font-bold">SHARE MEDIA</h3>
              </div>
              <p>
                Help us spread the word by sharing our media content on your
                social channels.
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <MdOutlineVolunteerActivism className="text-2xl mr-4 text-primary" />
                <h3 className="text-xl font-bold">BECOME VOLUNTEER</h3>
              </div>
              <p>
                If you want to become a volunteer, create an account and send us
                your request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
