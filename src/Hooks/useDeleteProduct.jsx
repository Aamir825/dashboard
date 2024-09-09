import React from 'react'
import {useLoaderData, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

function useDeleteProduct(){

  const prodData = useLoaderData();
  const navigate = useNavigate();

  const deleteProduct = async(id) =>{
    const response = await fetch(`http://localhost:5000/products/${id}`,{
        method: "DELETE"
    })
    if(response.ok){
        toast.success("Product Deleted Successfully!");
        navigate("/products");
    }else{
        toast.error("Something Error!");
        
    }
  }
  return {deleteProduct}
}
export default useDeleteProduct