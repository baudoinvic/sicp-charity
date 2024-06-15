


import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const ImageList = [
  {
    id: 1,
    img: "https://media.istockphoto.com/id/618053488/photo/little-african-boy-drinking-healthy-clean-water-from-tap.jpg?s=612x612&w=0&k=20&c=Kg4ju6Ae0Emb_E2PzqM02SgDY3Xa6c2ExUWLNmXvtMA=",
    title: "Solidarity Initiative for Children and People(SICP)",
    description:
      "join us in our mission to support those in need. Your donations and bids help us provide essential resources and services to communities around the world.",
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/1155341595/photo/hands-of-poor-child-scoop-drinking-water-africa.jpg?s=612x612&w=0&k=20&c=dlRNpym0Ivng186AMOfUZ2dFwMsWkmpR4AwIAQQZ2Js=",
    title: "Enjoy 30% off on selected items up for auction",
    description:
      "We are excited to offer this special discount to our valued customers. Join us and place your bids now to take advantage of this limited-time offer and support our charitable initiatives! ",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/1225623705/photo/group-of-happy-african-children-orphanage-in-nairobi-kenya-east-africa.jpg?s=612x612&w=0&k=20&c=c5ENdwlvZgbENxT2vx3DhnPwvz4VrcoAR2g2htN_FZk=",
    title: "Enjoy 70% off on all products sold",
    description:
      "Over 60% of our clients have already subscribed to our newsletter to stay updated on our latest product features and exclusive offers .",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
  
    <div className="relative overflow-hidden bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      <div className="h-[700px] w-[900px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-8"></div>
      <div className="w-full relative">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id} className="relative">
              <div
                className="h-[500px] sm:h-[550px] bg-cover bg-center brightness-60"
                style={{ backgroundImage: `url(${data.img})` }}
              ></div>
            </div>
          ))}
        </Slider>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center sm:items-start text-center sm:text-left bg-black bg-opacity-50 text-white p-10">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold w-full sm:w-2/4 mb-4 sm:mb-8">
            {ImageList[0].title}
          </h1>
          <p className="text-lg sm:text-xl w-full sm:w-2/4 mb-6">
            {ImageList[0].description}
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
            <Link to="/donation">
              <button
                onClick={handleOrderPopup}
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-3 px-8 sm:py-4 sm:px-10 mb-4 sm:mb-0 mr-0 sm:mr-4"
              >
                Donate
              </button>
            </Link>
            <Link to="/contact">
              <button
                onClick={handleOrderPopup}
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-3 px-8 sm:py-4 sm:px-10"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
