import React, { useContext } from "react";
import Button from "../Button/Button";
import { ThemeContext } from "../../Context/ThemeContext";

function ProductForm({ onChangeSubmit, onChangeData, product }) {

  const {isDarkMode} = useContext(ThemeContext);
  return (
    <>
      <div className={`${isDarkMode ? "dark text-white": ""} bg-white p-4`}>
        <h1 className=" text-xl font-[500] mb-3">Product Form</h1>
        <div>
          <form onSubmit={onChangeSubmit}>
            <div className=" mb-3">
              <label className=" text-sm">Product Name</label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={onChangeData}
                placeholder="Product name"
                className={`${isDarkMode ? " border-gray-700": ""} w-full py-1 px-2 outline-none border-2 bg-transparent border-gray-100 rounded-md`}
                required
              />
            </div>
            <div className=" mb-3">
              <label className=" text-sm">Product Description</label>
              <input
                type="text"
                name="description"
                value={product.description}
                onChange={onChangeData}
                placeholder="Product description"
                className={`${isDarkMode ? " border-gray-700": ""} w-full py-1 px-2 outline-none border-2 bg-transparent border-gray-100 rounded-md`}
                required
              />
            </div>
            <div className=" mb-3">
              <label className=" text-sm">Product Status</label>
              <select
                name="status"
                value={product.status}
                onChange={onChangeData}
                className={`${isDarkMode ? " border-gray-700": ""} w-full py-1 px-2 outline-none border-2 bg-transparent border-gray-100 rounded-md`}
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
                value={product.price}
                onChange={onChangeData}
                placeholder="Product price"
                className={`${isDarkMode ? " border-gray-700": ""} w-full py-1 px-2 outline-none border-2 bg-transparent border-gray-100 rounded-md`}
                required
              />
            </div>
            <Button type="submit" style="w-full bg-color py-2 rounded-sm text-white text-center" text="Submit"/>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProductForm;
