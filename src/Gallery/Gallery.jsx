import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import pic2 from "../assets/women/pic2.jpg";
import pic3 from "../assets/women/pic3.jpg";
import pic4 from "../assets/women/pic4.jpg";
import pic5 from "../assets/women/pic5.jpg";
import pic6 from "../assets/women/pic6.jpg";
import pic7 from "../assets/women/pic7.jpg";
import pic8 from "../assets/women/pic8.jpg";
import pic9 from "../assets/women/pic9.jpg";
import pic10 from "../assets/women/pic10.jpg";
import pic11 from "../assets/women/pic11.jpg";
import pic12 from "../assets/women/pic12.jpg";
import pic13 from "../assets/women/pic13.jpg";
import pic28 from "../assets/women/pic28.jpg";
import Footer from '../components/Footer/Footer';

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20 mb-10 text-center">
        <h1 className="text-3xl font-bold text-primary">Here is Our Gallery</h1>
        <p className="text-gray-600">
          Browse through our collection of pictures
        </p>
      </div>

      <div
        data-aos="zoom-in"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10"
      >
        <img
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic2}
          alt="Picture 2"
        />
        <img
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic3}
          alt="Picture 3"
        />
        <img
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic4}
          alt="Picture 4"
        />
        <img
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic5}
          alt="Picture 5"
        />
        <img
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic6}
          alt="Picture 6"
        />
        <img
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic7}
          alt="Picture 7"
        />
        <img
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic8}
          alt="Picture 8"
        />
        <img
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic9}
          alt="Picture 9"
        />
        <img
          className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic10}
          alt="Picture 10"
        />
        {/* <img
          className="w-full h-100 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic28}
          alt="Picture 28"
        /> */}
        <img
          className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic12}
          alt="Picture 12"
        />
        <img
          className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={pic13}
          alt="Picture 13"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Gallery
