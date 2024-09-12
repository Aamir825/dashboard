import { Link } from "react-router-dom";
import { MdCreateNewFolder } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteSweep } from "react-icons/md";
import useGetProducts from "../../Hooks/useGetProducts";
import Button from "../../UI/Button/Button";
import useDeleteProduct from "../../Hooks/useDeleteProduct";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

function Products() {
  const {isDarkMode} = useContext(ThemeContext);
  const productData = useGetProducts();
  const [pages, setPages] = useState(1);
  const {deleteProduct} = useDeleteProduct();
  const handleDelete = (id) =>{
    deleteProduct(id);
  }
  const selectPageHandler = (selectedpage) =>{
    if(selectedpage >=1 && selectedpage<= productData.length/4 && selectedpage !== pages)
    setPages(selectedpage);
    console.log("working")
  }

  return (
    <>
      <div className={`${isDarkMode ? "dark text-white": ""} p-5 mx-5 my-2 bg-white rounded-xl`}>
        <div className=" flex justify-between items-center mb-7">
          <div>
            <h1 className=" text-xl font-[500]">Products</h1>
          </div>
          <div>
            <Link to="/createproduct" className={``}>
              <Button
                text="Create"
                icon={<MdCreateNewFolder size={22} />}
                style=" bg-color py-1 px-3 text-white flex gap-1 rounded-sm"
              />
            </Link>
          </div>
        </div>
        <table className=" w-full">
          <thead>
            <tr>
              <th className={`${isDarkMode ? "text-white": ""}  text-left text-[13px] font-[500] text-gray-900 py-1`}>
                Name
              </th>
              <th className={`${isDarkMode ? "text-white": ""}  text-left text-[13px] font-[500] text-gray-900 py-1`}>
                Description
              </th>
              <th className={`${isDarkMode ? "text-white": ""}  text-left text-[13px] font-[500] text-gray-900 py-1`}>
                Status
              </th>
              <th className={`${isDarkMode ? "text-white": ""}  text-left text-[13px] font-[500] text-gray-900 py-1`}>
                Price
              </th>
              <th className={`${isDarkMode ? "text-white": ""} text-center text-[12px] font-[500] text-gray-900 py-1`}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {productData?.map(({ name, description, status, price, id }) => {
              return (
                <tr key={id} className={`${isDarkMode ? " border-gray-800": ""} border-y-2 border-gray-100`}>
                  <td className=" text-[12px]">{name}</td>
                  <td className=" py-3 text-[12px]">{description}</td>
                  <td
                    className={` ${
                      status == "Out of Stock"
                        ? "text-orange-500"
                        : " text-green-500"
                    } ${isDarkMode ? " bg-slate-800": ""} bg-slate-100 py-1 px-3 my-3 rounded-lg inline-block text-[12px]`}
                  >
                    {status}
                  </td>
                  <td className=" py-3 text-[12px]">{price}</td>
                  <td className=" text-center py-3">
                    <Link to={`/products/${id}`}>
                    <Button
                      style={`${isDarkMode ? " bg-slate-800": ""} bg-slate-100 text-green-500 p-1 mr-1`}
                      icon={<CiEdit />}
                    />
                    </Link>
                    <Button
                      style={`${isDarkMode ? " bg-slate-800": ""} bg-slate-100 text-red-500 p-1`}
                      onClick={()=> handleDelete(id)}
                      icon={<MdOutlineDeleteSweep />}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* {productData?.length>0 && (<div className=" px-8 mt-5">
          <span onClick={()=> selectPageHandler(pages - 1)} className= {`${pages > 1 ? "" : "cursor-not-allowed"} ${isDarkMode ? " border-gray-800 text-white": ""} p-2 border-2 border-gray-200 mr-1 cursor-pointer hover:bg-blue-600 hover:text-white`}>Prev</span>
          {[...Array(productData.length / 4)].map((_,index)=>{
            return <span onClick={() => selectPageHandler(index + 1)} className= {` ${pages === index + 1 ? " bg-blue-600 text-white":""} ${isDarkMode ? " border-gray-800 text-white": ""} p-2 border-2 border-gray-200 mr-1 cursor-pointer hover:bg-blue-600 hover:text-white`} key={index}>{index + 1}</span>
          })}
          <span onClick={()=> selectPageHandler(pages + 1)} className= {` ${pages < productData.length/4 ? "":" cursor-not-allowed"} ${isDarkMode ? " border-gray-800 text-white": ""} p-2 border-2 border-gray-200 mr-1 cursor-pointer hover:bg-blue-600 hover:text-white`}>Next</span>
        </div>)} slice(pages * 4 - 4, pages * 4).*/}
    </>
  );
}

export default Products;
