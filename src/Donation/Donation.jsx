import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Donation = () => {
  const navigate = useNavigate();
  
 const [formData, setFormData] = useState({
   firstname: "",
   lastname: "",
   email: "",
   amount: "",
 });

 const handleChange = (e) => {
   const fieldName = e.target.name;
   setFormData({
     ...formData,
     [fieldName]: e.target.value,
   });
 };

 const handleAmountClick = (amt) => {
   setFormData({ ...formData, amount: amt.toString() });
 };

 const handleAmountChange = (e) => {
   setFormData({ ...formData, amount: e.target.value });
 };

 const handleSubmit = async (e) => {
   e.preventDefault();

   try {
     console.log("Request Data:", formData);
     
     const response = await axios.post(
       "https://auction-website-auji.onrender.com/api/v1/donations",
       formData,
       {
         headers: {
           "Content-Type": "application/json",
         },
       }
     );
     console.log("Response Data:", response.data);
     toast.success("Donation created successfully");

     setTimeout(() => {
       navigate("/checkout");
     }, 2000);
   } catch (error) {
     console.error("Error:", error.response ? error.response.data : error);
     toast.error("Failed to donate. Please try again later.");
   }
 };

  return (
    <div className="Donation">
      <Navbar />
      <header
        className="hero bg-cover bg-center h-96"
        style={{
          backgroundImage:
            "url(https://assets-global.website-files.com/5fff1b1358bb914db4cb82f3/6053b1a7b7a1931385a35d84_charity%20water%202.png)",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-50 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">DONATE NOW</h1>
            <p className="text-xl">Make a difference with your contribution</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            How Much Would You Like To Donate?
          </h2>

          <div className="flex flex-col items-center mb-6">
            <div className="flex justify-center mb-4">
              {[30, 50, 75, 100].map((amt) => (
                <button
                  key={amt}
                  className={`px-4 py-2 rounded ${
                    formData.amount === amt.toString()
                      ? "bg-blue-600"
                      : "bg-primary"
                  } text-white transition-colors mx-1`}
                  onClick={() => handleAmountClick(amt)}
                >
                  ${amt}
                </button>
              ))}
            </div>
            <div className="flex justify-center">
              {[250, 500, 750, 1000].map((amt) => (
                <button
                  key={amt}
                  className={`px-4 py-2 rounded ${
                    formData.amount === amt.toString()
                      ? "bg-blue-600"
                      : "bg-primary"
                  } text-white transition-colors mx-1`}
                  onClick={() => handleAmountClick(amt)}
                >
                  ${amt}
                </button>
              ))}
            </div>
          </div>
          <input
            type="number"
            placeholder="Other amount"
            value={formData.amount}
            onChange={handleAmountChange}
            className="block mx-auto px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </section>

        <div className="flex flex-col md:flex-row md:space-x-20 items-start">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">
              Would You Like To Make a Regular Donation?
            </h2>
        
            <p className="mb-4">
              Your regular contributions help us sustain our mission and reach
              more people in need.
            </p>
            <div className="mb-6">
              <select
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="monthly">Monthly</option>
                <option value="onetime">One Time</option>
                <option value="quarterly">Quarterly</option>
                <option value="trimester">Trimester</option>
                <option value="annually">Annually</option>
              </select>
            </div>

            <h2 className="text-xl font-semibold mb-4">Donation Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleAmountChange}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Payment Method</option>
                <option value="creditCard">Credit Card</option>
              </select>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                <label htmlFor="newsletter" className="text-sm">
                  Subscribe to our newsletter
                </label>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded hover:bg-blue-600 transition-colors"
              >
                Proceed to Checkout
              </button>
            </form>
            <ToastContainer />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Why Donate?</h2>
            <p className="mb-4">
              Your donations support our ongoing efforts to provide clean water,
              education, and healthcare to communities in need.
            </p>
            <p className="mb-4">
              With your help, we can continue to make a significant impact and
              improve lives around the world.
            </p>
            <p>
              Every contribution, no matter the size, makes a difference. Thank
              you for your generosity and support.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Donation;

