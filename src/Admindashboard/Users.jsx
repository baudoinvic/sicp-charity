import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
  import { FaEdit } from "react-icons/fa";

const Users = () => {
  return (
    <div className="">
      <div class="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
        <div class="flex">
          <span class="font-bold mr-64">Firstname</span>
          <span class="font-bold mr-64">Lastname</span>
          <span class="font-bold mr-64">Email</span>
          <span class="font-bold mr-64">Action</span>
          <div class="flex items-center"></div>
        </div>
      </div>
      <div class="flex ml-5 mt-10">
        <span class=" mr-64">Firstname</span>
        <span class=" mr-64">Lastname</span>
        <span class=" mr-64">Email</span>
        <div class="flex items-center">
          <FaEdit className='text-2xl' />
          <MdDeleteOutline className='ml-4 text-2xl text-red-500' />
        </div>
      </div>
    </div>
  );
}

export default Users
