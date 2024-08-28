import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom';


const News = () => {
  return (
    <>
      <div className="newsletter">
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br py-8 px-4 sm:px-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-left">
            Ours NewsLetters
          </h1>

          <div className="flex flex-col lg:flex-row justify-center py-12 space-y-8 lg:space-y-0 lg:space-x-4">
            <div className="w-full lg:w-1/4">
              <div className="flex flex-col items-start">
                <Link to="/New">
                  <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                    <div className="bg-primary text-white p-4 text-center h-full flex flex-col justify-center">
                      <span className="text-lg">
                        Current Newsletter – August 2024
                      </span>
                    </div>
                  </div>
                </Link>

                <p className="text-gray-700 leading-relaxed w-full lg:w-2/3 text-sm">
                  Current Newsletter.
                  <br /> End of summer Vacation and New academic years In
                  September,
                </p>
              </div>
            </div>

        
          </div>

          <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-2"></h2>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-left">
            Old/Past Newsletter
          </h1>

          <section className="flex justify-start py-12">
            <div className="flex flex-col items-start max-w-md">
              <Link to="/Past">
                <div className="bg-white shadow-lg overflow-hidden mb-4 w-full max-w-[12rem] h-48 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                  <div className="bg-gray-100 text-black p-4 text-center h-full flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-2">
                      Merry Christmas and Happy New Year 2025
                    </h2>
                  </div>
                </div>
              </Link>

              <div className="text-gray-700 leading-relaxed text-sm">
                <Link to="/Past">
                  <p className="w-full lg:w-2/3 font-bold text-blue-500 underline ">
                    Old/Past Newsletter about Christmas
                  </p>
                </Link>

            
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default News
