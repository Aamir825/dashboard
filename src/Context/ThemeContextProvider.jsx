import React, { useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext';
import 'react-toastify/dist/ReactToastify.css';

const ThemeContextProvider =({children})=> {
  
  const [isDarkMode, setIsDarkMode] = useState();
  const ThemeMode = () =>{
    setIsDarkMode((prevMode)=> !prevMode)
    console.log("Toggle Dark Mode")
  }
  return (
    <ThemeContext.Provider value={{isDarkMode, ThemeMode}}>
        {children}
    </ThemeContext.Provider>
  )
}
export default ThemeContextProvider

