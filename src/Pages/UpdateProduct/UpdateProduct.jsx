import React, { useContext, useEffect, useState } from 'react'
import Button from '../../UI/Button/Button';
import useUpdateProduct from '../../Hooks/useUpdateProduct';
import { ThemeContext } from '../../Context/ThemeContext';

function UpdateProduct() {

  const {isDarkMode} = useContext(ThemeContext);  
  const {uproduct, setUproduct, updateProduct} = useUpdateProduct();
  const onChangeData = (e) =>{
    const {name,value} = e.target;
    setUproduct((prev)=> ({...prev , [name]: value}))
  }
  const onChangeUpdate = async(event) =>{
    event.preventDefault();
    await updateProduct();
  }
 

  return (
    <>
        <div className=" flex justify-center mt-4 rounded-xl">
        <div className={` ${isDarkMode ? " dark text-white": ""} bg-white p-4`}>
        <h1 className=" text-xl font-[500] mb-3">Product Form</h1>
        <div>
          <form onSubmit={onChangeUpdate}>
            <div className=" mb-3">
              <label className=" text-sm">Product Name</label>
              <input
                type="text"
                name="name"
                value={uproduct.name}
                // defaultValue={name}
                onChange={onChangeData}
                placeholder="Product name"
                className={`${isDarkMode ? " border-gray-800": ""} w-full py-1 px-2 outline-none border-2 bg-transparent border-gray-100 rounded-md`}
                required
              />
            </div>
            <div className=" mb-3">
              <label className=" text-sm">Product Description</label>
              <input
                type="text"
                name="description"
                value={uproduct.description}
                // defaultValue={description}
                onChange={onChangeData}
                placeholder="Product description"
                className={`${isDarkMode ? " border-gray-800": ""} w-full py-1 px-2 outline-none border-2 bg-transparent border-gray-100 rounded-md`}
                required
              />
            </div>
            <div className=" mb-3">
              <label className=" text-sm">Product Status</label>
              <select
                name="status"
                value={uproduct.status}
                // defaultValue={status}
                onChange={onChangeData}
                className={`${isDarkMode ? " border-gray-800": ""} w-full py-1 px-2 outline-none border-2 bg-transparent border-gray-100 rounded-md`}
              >
                <option value="in Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
            <div className=" mb-3">
              <label className=" text-sm">Product Price</label>
              <input
                type="text"
                name="price"
                value={uproduct.price}
                // defaultValue={price}
                onChange={onChangeData}
                placeholder="Product price"
                className={`${isDarkMode ? " border-gray-800": ""} w-full py-1 px-2 outline-none border-2 bg-transparent border-gray-100 rounded-md`}
                required
              />
            </div>
            <Button type="submit" style="w-full bg-color py-2 rounded-sm text-white text-center" text="Update"/>
          </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default UpdateProduct