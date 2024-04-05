import React from 'react'
import { GiDialPadlock } from "react-icons/gi";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Order = () => {
  return (
    <div data-aos="zoom-in" className="mt-10">
      <span className="text-3xl font-bold">orders</span>
      <div class="bg-white p-4 rounded-lg ">
        <div class="flex shadow-md mt-10">
          <span class="font-bold w-1/4">customer name</span>
          <span class="font-bold w-1/4">order date</span>
          <span class="font-bold w-1/4">Amount</span>
          <span class="font-bold w-1/4">Payment status</span>
          <span class="font-bold w-1/4">Action</span>
        </div>

        <div className="flex mt-10">
          <span className="w-1/4"></span>
          <span className="w-1/4"></span>
          <span className="w-1/4"></span>

          <div className="w-1/4 flex items-center">
            <FaEdit
              className="text-2xl text-gray-900 mr-2"
              style={{ cursor: "pointer" }}
            />
            <MdDeleteOutline
              className="text-2xl text-red-500"
              style={{ cursor: "pointer" }}
            />
            <span
              className="w-1/4 bg-green-500 py-1 px-2 rounded-lg text-white text-center"
              style={{ cursor: "pointer" }}
            >
              View
            </span>
          </div>
          {/* <div className="w-1/4 flex items-center text-primary">
            <GiDialPadlock className="text-2xl " />
            <span class=" mr-32">View details</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Order
