import React, { Suspense, useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet, useNavigation } from 'react-router-dom'
import { ThemeContext } from '../../Context/ThemeContext'
import Loader from '../Loader/Loader'

function Layout() {

  const {isDarkMode} = useContext(ThemeContext);
  const navigation = useNavigation();
  if(navigation.state === "loading"){
    return <Loader/>
  }
  return (
    <>
      <div className=" flex h-screen">
        <Sidebar />
        <div
          className={`${
            isDarkMode ? " bg-black" : ""
          } flex-1 flex flex-col bg-[#EFF3F4]`}
        >
          <Navbar />
          <main className=" flex-1 p-4 overflow-y-auto">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout