import React, { useContext } from "react";
import useGetProducts from "../../Hooks/useGetProducts";
import { ThemeContext } from "../../Context/ThemeContext";

function Table() {
  const productData = useGetProducts();
  const {isDarkMode} = useContext(ThemeContext);
  return (
    <>
      <div className=" flex justify-between items-center mb-2">
        <div>
          <h1 className=" text-xl font-[500]">Products</h1>
        </div>
        <div>
          <label aria-label=""></label>
          <select className= {`${isDarkMode ? "dark text-white border-gray-800": ""} outline-none border-2 border-gray-200 p-1 text-[13px] rounded-lg`}>
            <option>All Data</option>
            <option>Pending</option>
            <option>Done</option>
          </select>
        </div>
      </div>
      <table className=" w-full">
        <thead>
          <tr>
            <th className={`${isDarkMode ? "text-white": ""} text-left text-[13px] font-[500] text-gray-900 py-1`}>
              Name
            </th>
            <th className={`${isDarkMode ? "text-white": ""} text-center text-[13px] font-[500] text-gray-900 py-1`}>
              Desc
            </th>
            <th className={`${isDarkMode ? "text-white": ""} text-center text-[13px] font-[500] text-gray-900 py-1`}>
              Status
            </th>
            <th className={`${isDarkMode ? "text-white": ""} text-center text-[13px] font-[500] text-gray-900 py-1`}>
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {productData?.slice(0,8).map(({ id, name, description, status, price }) => {
            return (
              <tr key={id} className= {`${isDarkMode ? " border-gray-800": ""} border-y-2 border-gray-100`}>
                <td className=" text-[12px]">{name}</td>
                <td className=" text-center py-3 text-[12px]">{description}</td>
                <td className= {`text-center py-3 text-[12px]`}>{status}</td>
                <td className=" text-center py-3 text-[12px] text-green-500">
                  +{price}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
