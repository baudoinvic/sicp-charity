

import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useNavigate, useLocation } from "react-router-dom";

const Donation = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCancel = () => {
    toggleModal();
  };

  const handleSignup = () => {
    toggleModal();
    navigate("/signup");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isLoggedIn = false; 

    if (!isLoggedIn) {
      toggleModal();
    } else {
      navigate("/checkout", { state: { from: location } });
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
              {[25, 30, 50, 75].map((amt) => (
                <button
                  key={amt}
                  className={`px-4 py-2 rounded ${
                    amount === amt.toString() ? "bg-blue-600" : "bg-primary"
                  } text-white transition-colors mx-1`}
                  onClick={() => setAmount(amt.toString())}
                >
                  ${amt}
                </button>
              ))}
            </div>
            <div className="flex justify-center">
              {[100, 200, 570, 1000].map((amt) => (
                <button
                  key={amt}
                  className={`px-4 py-2 rounded ${
                    amount === amt.toString() ? "bg-blue-600" : "bg-primary"
                  } text-white transition-colors mx-1`}
                  onClick={() => setAmount(amt.toString())}
                >
                  ${amt}
                </button>
              ))}
            </div>
          </div>
          <input
            type="number"
            placeholder="Other amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
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
                <option value="quarterly">Quarterly</option>
                <option value="annually">Annually</option>
              </select>
            </div>

            <h2 className="text-xl font-semibold mb-4">Donation Details</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="">Payment Method</option>
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
              </select>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white rounded-lg p-6 shadow-lg z-10">
            <h2 className="text-xl font-semibold mb-4">Please Sign Up</h2>
            <p className="mb-6">
              To proceed with the donation, you need to create an account first.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition-colors"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded bg-primary text-white hover:bg-blue-600 transition-colors"
                onClick={handleSignup}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Donation;
