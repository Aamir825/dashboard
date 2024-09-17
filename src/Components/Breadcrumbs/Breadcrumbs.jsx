import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome } from "react-icons/fa";

const Breadcrumbs = () => {

  const {pathname} = useLocation();
  const pathnames = pathname.split("/").filter((x)=> x);
  let breadPathname = '';
  return (
    <>
        <div>
            <Link to="/" aria-label='Home' className=' inline-block text-gray-500 pr-1'><FaHome/></Link>
            {pathnames.map((name,index)=>{
                breadPathname+= `/${name}`;
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const islast = index === pathnames.length-1;
                return islast ?
                  <span key={routeTo}>{name}</span>:
                  (
                    <span key={routeTo}><Link to={routeTo}>{name}</Link></span>
                  )
            })}
        </div>
    </>
  )
}

export default Breadcrumbs