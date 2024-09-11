import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome } from "react-icons/fa";

const Breadcrumbs = () => {

  const {pathname} = useLocation();
  const pathnames = pathname.split("")
  console.log(pathnames)
  let breadPathname = '';
  return (
    <>
        <div>
            <Link to="/" className=' inline-block text-gray-500'><FaHome/></Link>
            {pathnames.map((name,index)=>{
                breadPathname+= `/${name}`;
                return <span>{name}</span>
            })}
        </div>
    </>
  )
}

export default Breadcrumbs