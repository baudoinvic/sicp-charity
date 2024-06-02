import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const About = () => {
  return (
    <div className="about-us">
      <Navbar />
      <div data-aos="zoom-in">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-8 mt-10">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src="https://media.istockphoto.com/id/1396980121/vector/real-estate-auctions-and-bidding-vector-concept.jpg?s=612x612&w=0&k=20&c=t7igFdum2uoBSbWYv6xjLYFL7IUWKKkgK4RJEzqf2-k="
              alt="Placeholder"
              className=" h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Right Side - Text */}
          <div className="w-full md:w-1/2 md:ml-8 mt-4 md:mt-0">
            <h3>WHO WE ARE!</h3>
            <h2 className="text-3xl font-bold mb-4">
              We Work for Your Incredible Success
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Auction sites present consumers with a thrilling, competitive way
              to buy the goods
              <br /> and services they need most. But getting your own auction
              site up and running has
              <br /> always required learning complex coding languages, or
              hiring an expensive design firm for thousands of dollars and
              months of work.
            </p>
          </div>
        </div>
       
      </div>
      <Footer />
    </div>
  );
}

export default About
