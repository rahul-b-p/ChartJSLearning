import React from "react";
import { Bar, Pie } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const StudentChart = ({ data }) => {
  // Array of predefined colors for students
  const colors = [
    "orange",
    "skyblue",
    "lightgreen",
    "blue",
    "green",
    "red",
  ];

  const marksData = {
    labels: data.map((student) => student.name),
    datasets: [
      {
        label: "Marks",
        data: data.map((student) => student.marks),
        backgroundColor: data.map((_,index) => colors[index % colors.length]), // Assign colors for each student
        borderColor: data.map((_,index) => colors[index % colors.length].replace("0.6", "1")), // Make borders darker
        borderWidth: 2,
      },
    ],
  };

  const attendanceData = {
    labels: data.map((student) => student.name),
    datasets: [
      {
        label: "Attendance (%)",
        data: data.map((student) => student.attendance),
        backgroundColor: data.map((_, index) => colors[index % colors.length]),
        borderColor: data.map((_, index) => colors[index % colors.length].replace("0.6", "1")),
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Student Marks and Attendance",
      },
    },
  };

  return (
    <div style={{padding:'100px'}}>
      <h2>Marks Chart</h2>
      <Bar data={marksData} options={options} />

      <h2>Attendance Chart</h2>
      <Pie data={attendanceData} options={options} />
    </div>
  );
};

export default StudentChart;
