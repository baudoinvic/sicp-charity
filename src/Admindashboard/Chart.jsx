

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
        label: "Number of Patients",
        data: [20, 43, 10, 54, 8, 23, 40, 23, 56, 87, 44, 10],
        backgroundColor: "#3B82F6",
      },
      {
        label: "Number of Patients",
        data: [24, 26, 16, 10, 20, 40, 46, 49, 72, 34, 54, 60],
        backgroundColor: "#111827",
      },
    ],
  };

  return (
    // <div className="grid grid-cols-2 gap-6">
    //   <div className="bg-white rounded-lg shadow-md p-6">
    //     <h2 className="text-xl font-semibold mb-4">Revenue Chart</h2>
    //     <div className="flex justify-center">
    //       <Bar options={options} data={data} />
    //     </div>
    //   </div>
    //   <div className="bg-white rounded-lg shadow-md p-6 w-94">
    //     <h2 className="text-xl font-semibold mb-4">Chat</h2>

    //   </div>
    // </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow-md p-6 h-96">
        {" "}
        {/* Add a fixed height for the chart container */}
        <h2 className="text-xl font-semibold mb-4">Revenue Chart</h2>
        <div className="flex justify-center h-full">
          {" "}
          {/* Use h-full to make the chart take up the remaining height */}
          <Bar options={options} data={data} />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Chat</h2>
        {/* Your chat component goes here */}
      </div>
    </div>
  );
};

export default Chart;