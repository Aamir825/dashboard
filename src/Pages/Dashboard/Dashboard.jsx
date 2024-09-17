import React,{useContext} from "react";
import Chart from "../../Components/Chart/Chart";
import TopCard from "../../UI/TopCard/TopCard";
import RightCards from "../../UI/RightCards/RightCards";
import Table from "../../UI/Table/Table";
import {ThemeContext} from "../../Context/ThemeContext"

function Dashboard() {

  const {isDarkMode} = useContext(ThemeContext);
  return (
    <>
      <div className=" px-8 py-3 grid grid-cols-4 gap-5">
        <TopCard
          bgcolor=" bg-color"
          text=" text-white"
          title="Total Projects" 
          value="10,724"
          desc="All running and completed projects"
        />
        <TopCard
          bgcolor= {` ${isDarkMode ? "dark" : ""} bg-white`}
          title="Completed Projects"
          value="9,804"
          desc="completion rate this month"
          text= {`${isDarkMode ? "text-white" : ""}`}
        />
        <TopCard
          bgcolor= {`${isDarkMode ? "dark" : ""} bg-white`}
          title="Running Projects"
          value="497"
          desc="running projects increases"
          text= {`${isDarkMode ? "text-white" : ""}`}
        />

        <div className=" col-span-1 row-span-4 flex flex-col gap-5">
          <RightCards />
        </div>
        <div className= {`${isDarkMode ? "dark text-white": ""} bg-white  col-span-3 rounded-xl`}>
          <Chart />
        </div>
        <div className= {`${isDarkMode ? "dark text-white": ""} bg-white col-span-3 p-5 rounded-xl`}>
          <Table />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
