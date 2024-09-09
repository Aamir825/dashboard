import React, { useContext } from "react";
import ReactApexChart from 'react-apexcharts';
import { ThemeContext } from "../../Context/ThemeContext";

function Chart() {
  const {isDarkMode} = useContext(ThemeContext);
  const options = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
      background: 'transparent',
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
      labels: {
        style: {
          // colors: '#1B1B1B', // Set x-axis category label color
          fontSize: '12px',  // Customize font size
        }
      }
    },
    yaxis: {
      title: {
        text: "Sales",
        style: {
          // color: '#1B1B1B', // Set y-axis title text color
          fontWeight: "normal"
        }
      },
    },
    title: {
      text: "Yearly Sales",
      align: "left",
      style: {
          // color: '#1B1B1B', // Set y-axis title text color
          fontWeight: "normal"
        }
    },
  };

  const series = [
    {
      name: "Sales",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];

  return (
    <div className= {`${isDarkMode ? "dark": ""}  p-5 rounded-lg h-full`}>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
}

export default Chart;
