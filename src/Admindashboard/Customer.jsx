import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
  import { FaEdit } from "react-icons/fa";

const Customer = () => {
  return (
    <div className="">
      <span className="text-3xl font-bold">Customers</span>
      <div class="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md mt-20">
        <div class="flex">
          <span class="font-bold mr-32">Country</span>
          <span class="font-bold mr-32">Town</span>
          <span class="font-bold mr-32">Street Address</span>
          <span class="font-bold mr-32">State</span>
          <span class="font-bold mr-32">postcode</span>
          <span class="font-bold mr-32">Email</span>
        </div>
      </div>
      <div class="flex ml-5 mt-10">
        <span class="mr-32">Country</span>
        <span class=" mr-32">Town</span>
        <span class="mr-32">Street Address</span>
        <span class=" mr-32">State</span>
        <span class=" mr-32">postcode</span>
        <span class=" mr-32">Email</span>
      </div>
    </div>
  );
}

export default Customer
