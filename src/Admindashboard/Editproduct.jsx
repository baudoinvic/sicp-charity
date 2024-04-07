import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Editproduct = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [productname, setProductname] = useState("");
  const [price, setPrice] = useState("");
  const [stockquanty, setStockquanty] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [productimage, setProductImage] = useState("");


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





  const handleSubmit = (e) => {
    e.preventDefault();
     const data = {
       productName: productname,
       price: price,
       stockQuantity: stockquanty,
       category: category,
       description: description,
       productImage: productimage,
     };
     axios({
      method: "PUT",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/update/${userId}`,
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        toast.success("user is successfully edited");
        setTimeout(() => {
          navigate("/Admindashboard/Dashboard/Users");
        }, 3000);
      })

      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      })

      .finally(() => {
        setIsLoading(false);
      });
  };
 
  return (
    <div>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="productname"
              className="block text-gray-700 font-medium mb-2"
            >
              Productname
            </label>
            <input
              type="text"
              id="productname"
              placeholder="Enter product name"
              required
              className="w-full border border-gray rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              value={productname}
              onChange={(e) => setProductname(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block text-gray-700 font-medium mb-2"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              placeholder="Enter price"
              required
              className="w-full border border-gray rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="stockquanty"
              className="block text-gray-700 font-medium mb-2"
            >
              Stock Quantity
            </label>
            <input
              type="text"
              id="stockquanty"
              placeholder="Enter stock quantity"
              required
              className="w-full border border-gray rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              value={stockquanty}
              onChange={(e) => setStockquanty(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="category"
              className="block text-gray-700 font-medium mb-2"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              placeholder="Enter category"
              required
              className="w-full border border-gray rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-2"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              placeholder="Enter description"
              required
              className="w-full border border-gray rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="productimage"
              className="block text-gray-700 font-medium mb-2"
            >
              Product Image
            </label>
            <input
              type="text"
              id="productimage"
              placeholder="Enter product image URL"
              required
              className="w-full border border-gray rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              value={productimage}
              onChange={(e) => setProductImage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white rounded-md px-4 py-2 hover:bg-gray-900 transition duration-300"
          >
            Update Product
            {isLoading && <div className="loader-spinner">Loading...</div>}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Editproduct;
