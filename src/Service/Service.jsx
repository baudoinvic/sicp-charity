// import React from 'react'
// import Navbar from '../components/Navbar/Navbar';

// const Service = () => {
//   return (
//     <div className="what we do">
//         <Navbar />
//       <div className="bg-gray-100 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="lg:text-center">
//             <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
//               What We Do
//             </h2>
//             <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//               Bringing Auctions to Your Fingertips
//             </p>
//             <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
//               Our auction website offers a seamless and exciting platform for
//               buyers and sellers to connect and participate in auctions from the
//               comfort of their homes.
//             </p>
//           </div>

//           <div className="mt-10">
//             <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
//               <div className="flex">
//                 <div className="flex-shrink-0">
//                   <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
//                     {/* Add an icon or image here */}
//                   </div>
//                 </div>
//                 <div className="ml-4">
//                   <dt className="text-lg leading-6 font-medium text-gray-900">
//                     For Buyers
//                   </dt>
//                   <dd className="mt-2 text-base text-gray-500">
//                     Explore a wide range of unique and exciting items, bid on
//                     your desired products, and secure great deals through our
//                     user-friendly bidding system.
//                   </dd>
//                 </div>
//               </div>

//             <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-900">For Buyers</h3>
//             <p className="mt-2 text-gray-600">
//               Explore a wide range of unique and exciting items, bid on your desired products, and secure great deals through our user-friendly bidding system.
//             </p>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-900">For Sellers</h3>
//             <p className="mt-2 text-gray-600">
//               List your items and reach a vast audience of potential buyers. Our platform provides a secure and efficient way to sell your products through auctions.
//             </p>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-900">Auction Categories</h3>
//             <p className="mt-2 text-gray-600">
//               Discover a diverse range of auction categories, from electronics and collectibles to art and antiques, catering to every interest and taste.
//             </p>
//           </div>
//           </div>

//               {/* Add more sections for sellers, auction categories, etc. */}
//             </dl>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default 

import React from "react";
import Navbar from "../components/Navbar/Navbar";

const Service = () => {
  return (
    <div className="what we do">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: 'url("/path/to/hero-image.jpg")' }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Bringing Auctions to Your Fingertips
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Our auction website offers a seamless and exciting platform for
            buyers and sellers to connect and participate in auctions from the
            comfort of their homes.
          </p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                For Buyers
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                Explore a wide range of unique and exciting items, bid on your
                desired products, and secure great deals through our
                user-friendly bidding system.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                For Sellers
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                List your items and reach a vast audience of potential buyers.
                Our platform provides a secure and efficient way to sell your
                products through auctions.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Auction Categories
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                Discover a diverse range of auction categories, from electronics
                and collectibles to art and antiques, catering to every interest
                and taste.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      

      {/* Call-to-Action */}
      <div className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Start Bidding Today
          </h2>
          <p className="text-gray-300 mb-8">
            Join our exciting auction platform and discover a world of unique
            items and great deals.
          </p>
          <a
            href="/signup"
            className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            Sign Up Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
