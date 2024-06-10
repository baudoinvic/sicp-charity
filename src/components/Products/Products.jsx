
import React from "react";
import { Link } from "react-router-dom";

export const ProductsData = [

  {
    id: 1,
    img: "https://bidout-wp.b-cdn.net/wp-content/uploads/2022/11/markus-spiske-fpTVkXjxL_Y-unsplash-1.jpg",
    title: "Macbook Pro 2024",
    rating: 5.0,
    price: "Current bid: 500$",
    currentBid: 500,
    bidIncrement: 50,
    endTime: "2024-06-30",
    bidHistory: [],
    aosDelay: "0",
    button: "Place A Bid",
    description: "Experience the power of the latest Macbook Pro with its blazing-fast performance and sleek design.",
  },
  {
    id: 2,
    img: "https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-1.jpg",
    title: "Black Analogue Watch",
    rating: 4.5,
    price: "Current bid: 100$",
    currentBid: 100,
    bidIncrement: 10,
    endTime: "2024-06-30",
    bidHistory: [],
    aosDelay: "200",
    button: "Place A Bid",
    description: "Elevate your style with this classic black analogue watch, perfect for any occasion.",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/610772852/photo/alarm-clock-blue-isolated-background.jpg?s=612x612&w=0&k=20&c=BCJiaRy9FsmcnOPmKRX4xH7fz7v3xPVX8OIFA4kWllg=",
    title: "Alarm Clock",
    rating: 4.7,
    price: "Current bid: 70$",
    currentBid: 70,
    bidIncrement: 5,
    endTime: "2024-06-30",
    bidHistory: [],
    aosDelay: "400",
    button: "Place A Bid",
    description: "Wake up on time with this reliable and stylish alarm clock, featuring a classic design.",
  },
  {
    id: 4,
    img: "https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-14.jpg",
    title: "Couple Wedding Ring",
    rating: 4.4,
    price: "Current bid: 6,020.0$",
    currentBid: 6020,
    bidIncrement: 100,
    endTime: "2024-06-30",
    bidHistory: [],
    aosDelay: "600",
    button: "Place A Bid",
    description: "Symbolize your eternal love with this exquisite couple wedding ring set, crafted with precision and elegance.",
  },
];


const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-5xl font-bold">
            Live Auction
          </h1>
          <p data-aos="fade-up" className="text-lg text-gray-500 mt-5">
            Explore on the world's best & largest Bidding marketplace with our
            beautiful Bidding products. We want to be a part of your smile,
            success and future growth.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 md:gap-5 place-items-center ">
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 border border-solid rounded-md p-3 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
              >
                <p className="text-gray-500">{data.description}</p>
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[250px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <span className="text-xl text-black font-bold">
                    {data.price}
                  </span>
                </div>
                <Link to={`/bidding/${data.id}`}>
                  <button className="mt-4 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300 ease-in-out">
                    {data.button}
                  </button>
                </Link>
              </div>
            ))}
          </div>
          {/* view all button */}
          <Link to="/Allproducts">
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-10 rounded-md">
                View All
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
