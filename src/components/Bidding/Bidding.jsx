
// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";


// const Modal = ({ show, onClose }) => {
//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-xl font-bold mb-4">Create an Account</h2>
//         <p className="mb-4">
//           You need to create an account before placing a bid.
//         </p>
//         <div className="flex justify-end">
//           <Link to="/signup">
//             <button
//               className="bg-primary text-white px-4 py-2 rounded-md mr-2"
//               onClick={() => {}}
//             >
//               Sign Up
//             </button>
//           </Link>
//           <button
//             className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
//             onClick={onClose}
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Bidding = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [bidAmount, setBidAmount] = useState("");
//   const [bidHistory, setBidHistory] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); 

//   useEffect(() => {
//     const productsArray = Array.isArray(ProductsData)
//       ? ProductsData
//       : Object.values(ProductsData);

//     const fetchedProduct = productsArray.find((p) => p.id === parseInt(id));
//     if (fetchedProduct) {
//       setProduct(fetchedProduct);
//       setBidHistory(fetchedProduct.bidHistory || []);
//     }
//   }, [id]);

//   const handleBidChange = (e) => {
//     setBidAmount(e.target.value);
//   };

//   const handlePlaceBid = () => {
//     if (!isLoggedIn) {

//       setShowModal(true);
//       return;
//     }

//     if (bidAmount >= product.currentBid + product.bidIncrement) {
//       const newBid = { amount: bidAmount, user: "CurrentUser" };
//       setBidHistory([newBid, ...bidHistory]);
//       setProduct({ ...product, currentBid: bidAmount });
//       setBidAmount("");
//     }
//   };

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-wrap -mx-4">
//           <div className="md:w-1/3 px-4 mb-8 md:mb-0 ml-40">
//             <div className="gallery-container">
//               <img
//                 src={product.img}
//                 alt="Product Image"
//                 className="main-image rounded-lg shadow-lg w-96"
//               />
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 px-4">
//             <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
//             <p className="mb-6">{product.description}</p>
//             <div className="mb-6">
//               <p>
//                 Current Bid:{" "}
//                 <span id="currentBid" className="font-bold text-xl">
//                   ${product.currentBid}
//                 </span>
//               </p>
//               <p>
//                 Auction Ends:{" "}
//                 <span id="auctionEndTime" className="font-bold">
//                   {product.endTime}
//                 </span>
//               </p>
//               <p className="text-sm text-gray-500">
//                 Bid Increment: ${product.bidIncrement}
//               </p>
//             </div>
//             <div className="mb-6">
//               <h3 className="text-lg font-bold mb-2">Bidding History</h3>
//               <ul id="bidHistory" className="list-disc pl-4 text-gray-600">
//                 {bidHistory.map((bid, index) => (
//                   <li key={index}>
//                     Bid Amount: ${bid.amount} by {bid.user}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-2">Place Your Bid</h3>
//               <div className="flex">
//                 <input
//                   type="number"
//                   id="bidAmount"
//                   value={bidAmount}
//                   onChange={handleBidChange}
//                   min={product.currentBid + product.bidIncrement}
//                   step={product.bidIncrement}
//                   placeholder="Enter your bid amount"
//                   required
//                   className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <button
//                   id="placeBidBtn"
//                   onClick={handlePlaceBid}
//                   disabled={
//                     bidAmount < product.currentBid + product.bidIncrement
//                   }
//                   className="bg-primary text-white px-8 py-2 rounded-r-md ml-5"
//                 >
//                   Bid Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//       <Modal show={showModal} onClose={() => setShowModal(false)} />
//     </div>
//   );
// };

// export default Bidding;