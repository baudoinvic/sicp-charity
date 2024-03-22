import React from 'react'
import { GiDialPadlock } from "react-icons/gi";

const Order = () => {
  return (
    <div className="order">
      <span className="text-3xl font-bold">Order</span>
      <div class="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md mt-20">
        <div class="flex">
          <span class="font-bold mr-32">order id</span>
          <span class="font-bold mr-32">number of items</span>
          <span class="font-bold mr-32">Amount</span>
          <span class="font-bold mr-32">Order Date</span>
        </div>
      </div>
      <div class="flex ml-5 mt-10">
        <span class="mr-32">#1</span>
        <span class=" mr-32">2items</span>
        <span class="mr-32">#11.70</span>
        <span class=" mr-32">5hours</span>
        <div className="items-center flex text-primary cursor-pointer">
          <GiDialPadlock className='text-2xl' />
          <span class=" mr-32">View details</span>
        </div>
      </div>
    </div>
  );
}

export default Order
