// import React from "react";
// import { MdDeleteOutline } from "react-icons/md";
// import { FaEdit } from "react-icons/fa";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";

// const Product = () => {
//   const [Products, setProducts] = useState([]);

//   const fetchProducts = () => {
//     let token = localStorage.getItem("token");
//     axios({
//       url: "https://beathaecommerceback-end.onrender.com/api/v1/product/viewAllProd",
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         const productsData = response.data.products; // Access the products array from the response
//         setProducts(productsData);
//         toast.success(response.data.message);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//         toast.error("Error fetching products. Please try again later.");
//       });
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div data-aos="zoom-in" className="">
//       <span className="text-3xl font-bold">Products</span>
//       <div className="bg-white p-4 rounded-lg mt-10">
//         <div className="flex shadow-md mt-10">
//           <span className="font-bold w-1/4">Productname</span>
//           <span className="font-bold w-1/4">Price</span>
//           <span className="font-bold w-1/4">Stock quantity</span>
//           <span className="font-bold w-1/4">Category</span>
//           <span className="font-bold w-1/4">Action</span>
//         </div>
//         {Products.map((product) => (
//           <div className="flex mt-10" key={product._id}>
//             <span className="w-1/4">{product.productName}</span>
//             <span className="w-1/4">{product.price}</span>
//             <span className="w-1/4">{product.stock_quantity}</span>
//             <span className="w-1/4">{product.category}</span>
//             <div className="w-1/4 flex items-center">
//               <FaEdit
//                 className="text-2xl text-gray-900 mr-2"
//                 style={{ cursor: "pointer" }}
//               />
//               <MdDeleteOutline
//                 className="text-2xl text-red-500"
//                 style={{ cursor: "pointer" }}
//               />
//               <ToastContainer />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product;


import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const Product = () => {
  const [Products, setProducts] = useState([]);
  const [file, setFile] = useState(null); // State for the selected file

  const fetchProducts = () => {
    let token = localStorage.getItem("token");
    axios({
      url: "https://beathaecommerceback-end.onrender.com/api/v1/product/viewAllProd",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        const productsData = response.data.products;
        setProducts(productsData);
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        toast.error("Error fetching products. Please try again later.");
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to handle file input change
 

  return (
    <div data-aos="zoom-in">
      <span className="text-3xl font-bold">Products</span>
      <div className="bg-white p-4 rounded-lg mt-10">
        <div className="flex shadow-md mt-10">
          <span className="font-bold w-1/4">Productname</span>
          <span className="font-bold w-1/4">Price</span>
          <span className="font-bold w-1/4">Stock quantity</span>
          <span className="font-bold w-1/4">Category</span>
          <span className="font-bold w-1/4">Product Image</span>{" "}
          {/* Added Product Image column */}
          <span className="font-bold w-1/4">Action</span>
        </div>
        {Products.map((product) => (
          <div className="flex mt-10" key={product._id}>
            <span className="w-1/4">{product.productName}</span>
            <span className="w-1/4">{product.price}</span>
            <span className="w-1/4">{product.stock_quantity}</span>
            <span className="w-1/4">{product.category}</span>
            <span className="w-1/4">
              <img
                src={product.productImage[0]}
                alt="Product"
                style={{ maxWidth: "100px" }}
              />
            </span>
            <div className="w-1/4 flex items-center">
              <FaEdit
                className="text-2xl text-gray-900 mr-2"
                style={{ cursor: "pointer" }}
              />
              <MdDeleteOutline
                className="text-2xl text-red-500"
                style={{ cursor: "pointer" }}
              />
              <ToastContainer />
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Product;

