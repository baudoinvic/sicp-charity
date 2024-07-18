

import React, { useState, useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Checkout = () => {


  const initialOptions = {
    clientId:
      "AeJAdQDCEdO3ub_KSYV-XKH2bDhU01_uACSrInHahGTyIVHHw6RnQLSrhhmyDyO9E_RBR9-dPi_eP2WV",
    currency: "USD",
    intent: "capture",
  };
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [amount, setAmount] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { amount } = location.state || {};
    if (amount) {
      setAmount(amount);
    }
  }, [location, navigate]);

  const validateForm = () => {
    if (!cardNumber || !expiryDate || !cvc || !nameOnCard) {
      toast.error("Please fill in all fields");
      return false;
    }
    if (!/^\d{16}$/.test(cardNumber)) {
      toast.error("Invalid card number");
      return false;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      toast.error("Invalid expiry date (MM/YY)");
      return false;
    }
    if (!/^\d{3,4}$/.test(cvc)) {
      toast.error("Invalid CVC");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const paymentData = {
      cardNumber,
      expiryDate,
      cvc,
      nameOnCard,
      amount,
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
        setTimeout(() => navigate("/thank-you"), 2000);
      } else {
        const errorData = await response.json();
        toast.error(`Payment processing failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      toast.error("Error processing payment. Please try again later.");
    }
  };

  const handlePayPalSuccess = async (details, data) => {
    console.log("PayPal payment successful", details);

    try {
      const response = await fetch(
        "https://auction-website-auji.onrender.com/api/v1/paypal-verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderID: data.orderID,
            amount: amount,
          }),
        }
      );

      if (response.ok) {
        toast.success("PayPal payment verified successfully!");
        setTimeout(() => navigate("/thank-you"), 2000);
      } else {
        toast.error("Failed to verify PayPal payment. Please contact support.");
      }
    } catch (error) {
      console.error("Error verifying PayPal payment:", error);
      toast.error("Error verifying payment. Please contact support.");
    }
  };

  return (
    <div className="Checkout min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer />

      <div className="max-w-2xl w-full space-y-8">
        <Link to="/Donation">
          <div className="flex">
            <IoMdArrowBack className="text-primary mt-1 mr-2" />
            <span className="text-primary">Back to Donation</span>
          </div>
        </Link>

        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Payment Details
          </h2>
          {/* <p className="mt-2 text-center text-sm text-gray-600">
            Donation Amount: ${amount.toFixed(2)}
          </p> */}
        </div>

        <div className="mt-8 space-y-6 bg-white p-10 shadow-lg rounded-lg">
          <div>
            <label
              htmlFor="payment-method"
              className="block text-sm font-medium text-gray-700"
            >
              Select Payment Method
            </label>
            <select
              id="payment-method"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
            >
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          {paymentMethod === "creditCard" ? (
            <form onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="card-number" className="sr-only">
                    Card Number
                  </label>
                  <input
                    id="card-number"
                    name="cardNumber"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                    placeholder="Card Number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </div>
                <div className="flex">
                  <div className="w-1/2 pr-2">
                    <label htmlFor="expiry-date" className="sr-only">
                      Expiry Date
                    </label>
                    <input
                      id="expiry-date"
                      name="expiryDate"
                      type="text"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                      placeholder="Expiry Date (MM/YY)"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <label htmlFor="cvc" className="sr-only">
                      CVC
                    </label>
                    <input
                      id="cvc"
                      name="cvc"
                      type="text"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                      placeholder="CVC"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="name-on-card" className="sr-only">
                    Name on Card
                  </label>
                  <input
                    id="name-on-card"
                    name="nameOnCard"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                    placeholder="Name on Card"
                    value={nameOnCard}
                    onChange={(e) => setNameOnCard(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Complete Payment
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <PayPalScriptProvider
                options={{initialOptions
                
                }}
              >
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: amount.toFixed(2),
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={async (data, actions) => {
                    const details = await actions.order.capture();
                    handlePayPalSuccess(details, data);
                  }}
                />
              </PayPalScriptProvider>
            </div>
          )}

          {paymentMethod === "paypal" && (
            <div className="mt-4 text-center">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={() => {
                  console.log("Initiating PayPal payment...");
                  // Handle PayPal payment initiation here if needed
                }}
              >
                Pay with PayPal
              </button>
            </div>
          )}
        </div>

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
          <img
            src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
            alt="PayPal"
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





