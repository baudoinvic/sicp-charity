


import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const paymentData = {
      cardNumber,
      expiryDate,
      cvc,
      nameOnCard,
    };

    try {
      const response = await fetch(
        "https://auction-website-auji.onrender.com/api/v1/payments/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentData),
        }
      );

      if (response.ok) {
        toast.success("Payment processed successfully!");
      } else {
        toast.error("Payment processing failed.");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      toast.error("Error processing payment. Please try again later.");
    }
  };



  return (
    <div className="Checkout min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer />

      <div className="max-w-2xl w-full space-y-8">
        <Link to="/Donation">
          <div className="flex">
            <IoMdArrowBack className="text-primary mt-1 mr-2" />
            <span className="text-primary">Donation</span>
          </div>
        </Link>

        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Payment Details
          </h2>
        </div>
        <form
          className="mt-8 space-y-6 bg-white p-10 shadow-lg rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="card-number" className="sr-only">
                Card Number
              </label>
              <input
                id="card-number"
                name="cardNumber"
                type="text"
                autoComplete="cc-number"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <label htmlFor="expiry-date" className="sr-only">
                  Expiry Date
                </label>
                <input
                  id="expiry-date"
                  name="expiryDate"
                  type="text"
                  autoComplete="cc-exp"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Expiry Date (MM/YY)"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="cvc" className="sr-only">
                  CVC
                </label>
                <input
                  id="cvc"
                  name="cvc"
                  type="text"
                  autoComplete="cc-csc"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="CVC"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="name-on-card" className="sr-only">
                Name on Card
              </label>
              <input
                id="name-on-card"
                name="nameOnCard"
                type="text"
                autoComplete="cc-name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Name on Card"
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-transform transform hover:scale-105"
            >
              Complete Payment
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
            alt="Visa"
            className="h-8 inline-block mx-2"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
            alt="MasterCard"
            className="h-8 inline-block mx-2"
          />
          <p className="text-center text-sm text-gray-600 mt-2">
            Your payment information is secure and encrypted.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

