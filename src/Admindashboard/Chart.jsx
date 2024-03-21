import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
          label: "number of patient",
          data: [20, 43, 10, 54, 8, 23, 40, 23, 56, 87, 44, 10],
          backgroundColor: "#6A399E",
        },
        {
          label: "number of patient",
          data: [24, 26, 16, 10, 20, 40, 46, 49, 72, 34, 54, 60, 65, 70, 72],
          backgroundColor: "skyblue",
        },
      ],
    };

    ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <div>
      <div className="chart">
        {/* <Bar  options={options} data={data} /> */}
        <Bar className="option" options={options} data={data} />
      </div>
    </div>
  );
}

export default Chart
