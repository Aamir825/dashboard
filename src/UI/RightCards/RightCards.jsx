import React, { useContext } from 'react'
import Teamchart from "../../Components/Teamchart/Teamchart";
import { ThemeContext } from '../../Context/ThemeContext';

function RightCards() {

  const {isDarkMode} = useContext(ThemeContext);
  return (
    <>
          <div className={` ${isDarkMode ? "dark text-white": ""} bg-white rounded-xl p-5 h-52`}>
            <p className=" bg-slate-100 inline-block py-1 px-2 text-[11px] mb-4 text-blue-500 rounded-lg">
              Team Review
            </p>
            <h1 className=" font-[500]">MS Project Team</h1>
            <p className=" text-[11px] text-gray-500 mt-1 mb-3">
              MS is built for every user of your project team to plan, manage
            </p>
            <p className=" text-[11px]">
              14 . 10 . 23{" "}
              <span className= {` ${isDarkMode ? " text-black": ""} bg-slate-100 py-1 px-2 rounded-md ml-3`}>
                15 Members
              </span>
            </p>
            <div className=" flex justify-between mt-5 pb-1">
              <div>
                <p className={`${isDarkMode ? "text-black": ""} text-[12px] bg-slate-100 font-[500] py-1 px-3 rounded-md`}>
                  Notion File
                </p>
              </div>
              <div className="flex items-center">
                <img src="/images/image-avatar.png" className=" w-6" />
                <img src="/images/image-avatar.png" className=" w-6 -mx-2" />
                <img src="/images/image-avatar.png" className=" w-6" />
              </div>
            </div>
          </div>
          <div className= {`${isDarkMode ? "dark text-white": ""} bg-white p-5 rounded-xl h-54 col-span-1`}>
            <p className="text-[11px]">Meeting</p>
            <h1 className=" font-[500]">
              Upcoming Event Planning Discussion
            </h1>
            <p className=" text-[11px] text-gray-500 mt-1 mb-3">
              MS is built for every user of your project team to plan, manage
            </p>
            <p className={`${isDarkMode ? "text-black": ""} text-[12px] bg-slate-100 py-1 px-3 inline-block rounded-md`}>
              16 Oct <span className="m ml-3">11:00 - 12:00</span>
            </p>
            <button className= {`${isDarkMode ? "text-black": ""} bg-slate-100 py-1 mt-5 text-[13px] font-[500] w-full rounded-md`}>
              Meeting Zoom Link
            </button>
          </div>
          <div className= {` ${isDarkMode ? "dark text-white": ""} bg-white p-5 rounded-xl col-span-1 `}>
            <h1 className=" font-[500]">Team Performance</h1>
            <p className=" text-[11px] mt-1 mb-3">Last 4 months</p>
            <div>
              <Teamchart />
            </div>
          </div>
    </>
  )
}

export default RightCards