import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
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

export const ScoreGraph = ({followers}: any) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const
      },
      title: {
        display: true,
        text: "Sguidores"
      }
    }
  };
  
  const labels = ["Followers"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [followers],
        backgroundColor: "#8D4FBC"
      }
    ]
  };
  return <Bar options={options} data={data} />;
}