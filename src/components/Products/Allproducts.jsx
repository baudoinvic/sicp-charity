import React from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
// import { Link } from 'react-router-dom';

export default function Allproducts() {
    const ProductsData = [
      {
        id: 1,
        img: "https://bidout-wp.b-cdn.net/wp-content/uploads/2022/11/markus-spiske-fpTVkXjxL_Y-unsplash-1.jpg",
        title: "Macbook Pro 2024",
        rating: 5.0,
        price: "Current bid: 500$",
        aosDelay: "0",
        button: "Place A Bid",
      },
      {
        id: 2,
        img: "https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-1.jpg",
        title: "Black Analogue Watch",
        rating: 4.5,
        price: "Current bid: 100$",
        aosDelay: "200",
        button: "Place A Bid",
      },
      {
        id: 3,
        img: "https://media.istockphoto.com/id/610772852/photo/alarm-clock-blue-isolated-background.jpg?s=612x612&w=0&k=20&c=BCJiaRy9FsmcnOPmKRX4xH7fz7v3xPVX8OIFA4kWllg=",
        title: "Alarm Clock ",
        rating: 4.7,
        price: "Current bid: 70$",
        aosDelay: "400",
        button: "place A Bid",
      },
      {
        id: 4,
        img: "https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-14.jpg",
        title: "Couple Wedding Ring",
        rating: 4.4,
        price: "Current bid: 6,020.0$",
        aosDelay: "600",
        button: "Place A Bid",
      },
    ];
  return (
    <>
      <Navbar />
     
      <Footer />
    </>
  );
}
