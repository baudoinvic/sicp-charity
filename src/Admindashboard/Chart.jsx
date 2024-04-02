

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
        backgroundColor: "#3B82F6",
      },
      {
        label: "orders",
        data: [24, 26, 16, 10, 20, 40, 46, 49, 72, 34, 54, 60],
        backgroundColor: "#111827",
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
     
        <div className="bg-white rounded-lg shadow-md p-6 w-[110vh]   h-[65vh] ml-10  ">
          <h2 className="text-xl font-semibold mb-4">Revenue Chart</h2>
          <div className="flex justify-center h-full">
            <Bar options={options} data={data} />
          </div>
        
      </div>
      <div className="ml-20  bg-white rounded-lg shadow-lg p-6 w-full xl:w-4/12 px-4  h-[65vh] " style={{marginLeft: '17rem'}}>
        <h2 className="text-xl font-semibold mb-4">Chat</h2>
         <p>hello how can i assist you </p>
      </div>
    </div>
  );
};

export default Chart;