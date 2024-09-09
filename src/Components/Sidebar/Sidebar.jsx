import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { RiTeamFill } from "react-icons/ri";
import { SiAlwaysdata } from "react-icons/si";
import { BsFileEarmarkText } from "react-icons/bs";
import { TbSettings2 } from "react-icons/tb";
import { PiLightbulbLight } from "react-icons/pi";
import { CiLogin } from "react-icons/ci";
import { ThemeContext } from "../../Context/ThemeContext";

function SideBar() {

  const {isDarkMode} = useContext(ThemeContext);
  return (
    <>
      <div className={` ${isDarkMode ? "dark text-white": ""} shadow-md p-8`}>
        {/* Sidebar Top image and name */}
        <div className=" flex items-center gap-3">
          <div>
            <img src="./images/image-avatar.png" alt="" className=" w-12" />
          </div>
          <div>
            <h1 className="font-[500]">Muhammad</h1>
            <p className=" text-[11px] text-[#969696] -mt-1">CEO, MS</p>
          </div>
        </div>
        {/* Sidebar Menus */}
        <div className=" mt-10">
          <ul className=" flex flex-col gap-3">
            <NavLink
              to=""
              className={({ isActive }) =>
                ` flex items-center gap-3 text-[13px] py-2 px-3 rounded-md ${
                  isActive ? " bg-color text-white" : ""
                }`
              }
            >
              {(isActive) => (
                <>
                  {" "}
                  <RiDashboardLine
                    className={` ${isActive} ? " text-white" : "text-gray-600" `}
                    size={18}
                  />
                  Dashboard{" "}
                </>
              )}
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                ` flex items-center gap-3 text-[13px] py-2 px-3 rounded-md hover:bg-color ${
                  isActive ? " bg-color text-white" : ""
                }`
              }
            >
              {(isActive) => (
                <>
                  {" "}
                  <GoProjectSymlink
                    className={` ${isActive} ? " text-white" : "text-gray-600" `}
                    size={18}
                  />
                  Products{" "}
                </>
              )}
            </NavLink>
            <NavLink
              to="/transactions"
              className={({ isActive }) =>
                ` flex items-center gap-3 text-[13px] py-2 px-3 rounded-md hover:blue-color ${
                  isActive ? " bg-color text-white" : ""
                }`
              }
            >
              {(isActive) => (
                <>
                  {" "}
                  <GrTransaction
                    className={` ${isActive} ? " text-white" : "text-gray-600" `}
                    size={18}
                  />
                  Transaction{" "}
                </>
              )}
            </NavLink>
            <NavLink
              to="/myteam"
              className={({ isActive }) =>
                ` flex items-center gap-3 text-[13px] py-2 px-3 rounded-md hover:blue-color ${
                  isActive ? " bg-color text-white" : ""
                }`
              }
            >
              {(isActive) => (
                <>
                  {" "}
                  <RiTeamFill
                    className={` ${isActive} ? " text-white" : "text-gray-600" `}
                    size={18}
                  />
                  My Team{" "}
                </>
              )}
            </NavLink>
            <NavLink
              to="/research"
              className={({ isActive }) =>
                ` flex items-center gap-3 text-[13px] py-2 px-3 rounded-md hover:blue-color ${
                  isActive ? " bg-color text-white" : ""
                }`
              }
            >
              {(isActive) => (
                <>
                  {" "}
                  <SiAlwaysdata
                    className={` ${isActive} ? " text-white" : "text-gray-600" `}
                    size={18}
                  />
                  Research Data{" "}
                </>
              )}
            </NavLink>
            <NavLink
              to="/report"
              className={({ isActive }) =>
                ` flex items-center gap-3 text-[13px] py-2 px-3 rounded-md hover:blue-color ${
                  isActive ? " bg-color text-white" : ""
                }`
              }
            >
              {(isActive) => (
                <>
                  {" "}
                  <BsFileEarmarkText
                    className={` ${isActive} ? " text-white" : "text-gray-600" `}
                    size={18}
                  />
                  Reports{" "}
                </>
              )}
            </NavLink>
            <p className=" border"></p>
            <NavLink
              to="/research"
              className={({ isActive }) =>
                ` flex items-center gap-3 text-[13px] py-2 px-3 rounded-md ${
                  isActive ? " bg-color text-white" : ""
                }`
              }
            >
              {(isActive) => (
                <>
                  {" "}
                  <TbSettings2
                    className={` ${isActive} ? " text-white" : "text-gray-600" `}
                    size={18}
                  />
                  Setting{" "}
                </>
              )}
            </NavLink>
            <NavLink
              to="/report"
              className={({ isActive }) =>
                ` flex items-center gap-3 text-[13px] py-2 px-3 rounded-md ${
                  isActive ? " bg-color text-white" : ""
                }`
              }
            >
              {(isActive) => (
                <>
                  {" "}
                  <PiLightbulbLight
                    className={` ${isActive} ? " text-white" : "text-gray-600" `}
                    size={18}
                  />
                  Help{" "}
                </>
              )}
            </NavLink>
            <NavLink
              to="/report"
              className={({ isActive }) =>
                ` flex items-center gap-3 text-[13px] py-2 px-3 mt-20 rounded-md hover:blue-color ${
                  isActive ? " bg-color text-white" : ""
                }`
              }
            >
              {(isActive) => (
                <>
                  {" "}
                  <CiLogin
                    className={` ${isActive} ? " text-white" : "text-gray-600" `}
                    size={18}
                  />
                  Logout{" "}
                </>
              )}
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
