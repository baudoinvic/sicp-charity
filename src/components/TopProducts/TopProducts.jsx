import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductsData = [
  {
    id: 1,
    img: "https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-1.jpg",
    title: "Black Analogue Watch",
    description:
      "the one of the best watch for men's and women's as well",
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/610772852/photo/alarm-clock-blue-isolated-background.jpg?s=612x612&w=0&k=20&c=BCJiaRy9FsmcnOPmKRX4xH7fz7v3xPVX8OIFA4kWllg=",
    title: "Alarm Clock",
    description:
      "this is upcoming auction for alarm clock stay update with us so that you can't miss it out",
  },
  {
    id: 3,
    img: "https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-14.jpg",
    title: "Couple Wedding Ring",
    description:
      "this is upcoming auction for women's wedding ring.",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">

        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Exciting Auctions Await You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Up Comming Auction
          </h1>
         
            <p data-aos="fade-up" className="text-lg text-gray-400 mt-5">
              Explore on the world's best & largest Bidding marketplace with our
              beautiful Bidding products. We want to be a part of your smile,
              success and future growth.
            </p>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center mt-40">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
               
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-2 px-5 mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={handleOrderPopup}
                  >
                   View details
                  </button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
