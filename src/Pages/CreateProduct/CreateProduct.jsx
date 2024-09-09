import React, { useState } from "react";
import useCreateProduct from "../../Hooks/useCreateProduct";
import ProductForm from "../../UI/ProductForm/ProductForm";

function CreateProduct() {
  const { product, setProduct, createProduct } = useCreateProduct();

  const onChangeData = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeSubmit = async (event) => {
    event.preventDefault();
    await createProduct();
  }; 
  return (
    <>
      <div className=" flex justify-center mt-4 rounded-xl">
        <ProductForm
          onChangeSubmit={onChangeSubmit}
          onChangeData={onChangeData}
          product={product}
        />
      </div>
    </>
  );
}

export default CreateProduct;
