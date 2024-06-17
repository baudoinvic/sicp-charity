
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const Donations = () => {
  const [Products, setProducts] = useState([]);
 

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

 
  const handleDeleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      let token = localStorage.getItem("token");
      axios({
        url: `https://beathaecommerceback-end.onrender.com/api/v1/product/deleteProduct/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          toast.success("Product deleted successfully");
          console.log(response, "Response");
        })
        .catch((error) => {
          toast.error(error.response.data.message);
          console.log(error, "Error");
        });
    }
  };

  return (
    <div data-aos="zoom-in" className="mt-10">
      <span className="text-3xl font-bold">Donations</span>
      <div className="bg-white p-4 rounded-lg ">
        <div className="flex shadow-md mt-10">
          <span className="font-bold w-1/4">Donor name</span>
          <span className="font-bold w-1/4">Donation amount</span>
          <span className="font-bold w-1/4">Email</span>
          <span className="font-bold w-1/4">phone number</span>
          <span className="font-bold w-1/4">City</span>
          <span className="font-bold w-1/4">Action</span>
        </div>
        {Products.map((product) => (
          <div className="flex mt-10" key={product._id}>
            <span className="w-1/4">{product.productName}</span>
            <span className="w-1/4">{product.price}</span>
            <span className="w-1/4">{product.stock_quantity}</span>
            <span className="w-1/4">{product.category}</span>
            <span className="w-1/4">{product.description}</span>
            <span className="w-1/4">
              <img
                src={product.productImage[0]}
                alt="Product"
                style={{ maxWidth: "100px" }}
              />
            </span>
            <div className="w-1/4 flex items-center">
              <Link to="/Admindashboard/Dashboard/Editproduct/${product._id}">
                <FaEdit
                  className="text-2xl text-gray-900 mr-2"
                  style={{ cursor: "pointer" }}
                />
              </Link>
              <MdDeleteOutline
                onClick={() => handleDeleteProduct(product._id)}
                className="text-2xl text-red-500"
                style={{ cursor: "pointer" }}
              />
           
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donations;

