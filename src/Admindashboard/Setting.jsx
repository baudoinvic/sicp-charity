import React from 'react'

const Setting = () => {
  return (
    <div className="flex justify-between items-center mt-20">
      <div className="w-1/2 mr-5">
        <h1 class="text-lg font-bold mb-4">Personal information</h1>
        <input
          type="text"
          class="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:border-blue-500"
          placeholder="First Name"
        ></input>
        <br />
        <input
          type="email"
          class="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:border-blue-500"
          placeholder="Email"
        ></input>
   
        <br />
        <input
          type="text"
          class="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:border-blue-500"
          placeholder="Address"
        ></input>
      </div>
      <div className="w-1/2">
        <input
          type="text"
          class="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:border-blue-500"
          placeholder="Last Name"
        ></input>
        <br />
        <input
          type="tel"
          class="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:border-blue-500"
          placeholder="Phone Number"
        ></input>
        <br />
        <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Setting
