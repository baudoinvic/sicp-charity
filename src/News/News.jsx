import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';


const News = () => {
  return (
    <>
      <div className="newsletter">
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br py-8 px-4 sm:px-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-left">
            Current Newsletter
          </h1>
          <div className="flex space-x-4">
            <div className="w-full lg:w-1/4">
              <div className="flex flex-col items-start">
                <Link to="/Current">
                  <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                    <div className="bg-primary text-white p-4 text-center h-full flex flex-col justify-center">
                      <span className="text-lg">
                        Current Newsletter – August 2024
                      </span>
                    </div>
                  </div>
                </Link>

                <Link to="/Current">
                  <p className="leading-relaxed w-full text-sm text-blue-500 hover:underline  transition duration-300 ease-in-out cursor-pointer">
                    Current Newsletter.
                    <br /> End of summer Vacation and New academic years In
                    September,
                  </p>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/4">
              <div className="flex flex-col items-start">
                <Link to="/Old">
                  <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                    <div className="bg-primary text-white p-4 text-center h-full flex flex-col justify-center">
                      <span className="text-lg">
                        Current Newsletter – August 2024
                      </span>
                    </div>
                  </div>
                </Link>

                <Link to="/Old">
                  <p className="leading-relaxed w-full text-sm text-blue-500 hover:underline  transition duration-300 ease-in-out cursor-pointer">
                    Merry Christmas and Happy New Year 2025
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-2"></h2>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-left">
            Old Past Newsletter
          </h1>

          <section className="flex justify-start py-12">
            <div className="flex flex-col items-start max-w-md">
              <Link to="">
                <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                  <div className="bg-gray-100 text-black p-4 text-center h-full flex flex-col justify-center">
                    <span className="text-1xl font-bold mb-2">
                      Past Newsletter about Christmas
                    </span>
                  </div>
                </div>
              </Link>

              <div className="text-gray-700 leading-relaxed text-sm">
                <Link to="">
                  <p className="w-full lg:w-2/3 font-bold text-blue-500 hover:underline  transition duration-300 ease-in-out cursor-pointer ">
                    Old/Past Newsletter about Christmas
                  </p>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News
