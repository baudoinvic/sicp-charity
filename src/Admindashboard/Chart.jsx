

import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const Chart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total revenue",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Number of customers",
        data: [20, 43, 10, 54, 8, 23, 40, 23, 56, 87, 44, 10],
        backgroundColor: "#FFBF00",
      },
      {
        label: "orders",
        data: [24, 26, 16, 10, 20, 40, 46, 49, 72, 34, 54, 60],
        backgroundColor: "#111827",
      },
    ],
  };

  return (
  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl shadow-lg p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Revenue Chart</h2>
          <div className="flex items-center">
            <span className="mr-2 text-gray-600">Filter:</span>
            <select className="bg-gray-200 text-gray-800 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>
        <div className="relative h-[400px]">
          <Bar options={options} data={data} />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
           
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6 overflow-hidden">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Metrics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Highest Bid
            </h3>
            <p className="text-2xl font-bold text-orange-500">$5,000</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              New Bidders
            </h3>
            <p className="text-2xl font-bold text-orange-500">125</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Upcoming Auctions
            </h3>
            <p className="text-2xl font-bold text-orange-500">8</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Hot Items
            </h3>
            <p className="text-2xl font-bold text-orange-500">12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;