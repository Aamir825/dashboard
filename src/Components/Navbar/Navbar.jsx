import React, { useContext } from 'react'
import { CiSearch } from "react-icons/ci";
import { TbSun } from "react-icons/tb";
import { IoMoonOutline } from "react-icons/io5";
import { BsChatSquareDots } from "react-icons/bs";
import { ThemeContext } from '../../Context/ThemeContext';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

function Navbar() {
  const {isDarkMode, ThemeMode} = useContext(ThemeContext);
  let userDetails = JSON.parse(localStorage.getItem("users")) ?? [];
  const loggedInUser = userDetails[0];
  return (
    <>
      <div className=' flex justify-between items-center px-12 pt-8'>
        <div>
          <h1 className={`${isDarkMode ? "text-white": ""} text-2xl font-[500]`}>Dashboard</h1>
          <p className=' text-[#969696] text-[12px]'>8th Sep 2024</p>
        </div>
        <div className=' flex items-center gap-5'>
          <div className=' relative'>
            <CiSearch className=' absolute z-10 top-3 left-2 text-gray-400' size={18}/>
            <input type='text' placeholder='Search' className= {`${isDarkMode ? "dark text-white": ""} relative px-7 py-2 bg-[#ededed] rounded-full outline-none`}/>
          </div>
          <div className={`${isDarkMode ? "dark text-white": ""} flex gap-4 bg-[#ededed] py-1 px-1 rounded-full`}>
             <button className={` ${!isDarkMode? "bg-white" : " bg-transparent"} transition-all rounded-full p-2`} onClick={ThemeMode}><TbSun className= {`text-yellow-500 $`} size={18}/></button>
             <button className={` ${isDarkMode ? " bg-white": " bg-transparent"} transition-all rounded-full p-2`} onClick={ThemeMode}><IoMoonOutline className= {`${isDarkMode ? "text-yellow-700": ""} text-gray-400`} size={18}/></button>
          </div>
          <div className={`${isDarkMode ? "dark text-white": ""} bg-[#ededed] py-3 px-4 rounded-full`}>
            <BsChatSquareDots/>
          </div>
          <div className=' flex items-center gap-2'>
            <div>
              <img src='/images/image-avatar.png' alt='' className=' w-10'/>
            </div>
            <h1 className={`${isDarkMode ? "text-white": ""} text-[12px] font-[500]`}>{loggedInUser?.name}</h1>
          </div>
        </div>
      </div>
      <div className=' px-12 pt-2'>
      <Breadcrumbs/>
      </div>
    </>
  )
}

export default Navbar