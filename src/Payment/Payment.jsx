import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";

const Payment = () => {
  return (
    <div data-aos="zoom-in">
      <div class="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
        <Link to="/checkout">
          <div className="flex">
            <IoMdArrowBack className="text-primary mt-1 mr-2" />
            <span className="text-primary">Billing</span>
          </div>
        </Link>
        <h2 class="text-xl font-semibold mb-4">Payment Details</h2>
        <form>
          <div class="relative mb-4">
            <label
              for="cardNumber"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Card Number
            </label>
            <div class="flex items-center">
              <input
                type="text"
                id="cardNumber"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="**** **** **** ****"
                maxlength="16"
                required
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxy9p06iReAMa77FtIIc4D1Dhs3kJbqZSqA&usqp=CAU"
                alt="Card Icon"
                class="w-10 h-auto ml-2"
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                for="expiry"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiry"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="MM/YY"
                maxlength="5"
                required
              />
            </div>
            <div class="relative mb-4">
              <label
                for="cvv"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                CVV
              </label>
              <div class="flex items-center">
                <input
                  type="text"
                  id="cvv"
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="CVV"
                  maxlength="3"
                  required
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWomDPr4icjqX_87zFcYA93t3vUC2GEgKOAJdVBtJqbKiVXDNr52iY172_BIW2k8lCTh4&usqp=CAU"
                  alt="Card Icon"
                  class="w-6 h-auto ml-2"
                />
              </div>
            </div>
          </div>
          <div class="mb-4">
            <label
              for="name"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Name on Card
            </label>
            <input
              type="text"
              id="name"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
              required
            />
          </div>
          <button
            type="submit"
            class="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment
