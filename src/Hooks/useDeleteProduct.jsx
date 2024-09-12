import React from 'react'
import {useLoaderData, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import { DeleteProduct } from '../Services/GetService';

function useDeleteProduct(){

  const prodData = useLoaderData();
  const navigate = useNavigate();

  const deleteProduct = async(id) =>{
    const response = await DeleteProduct(id);
    if(response){
        toast.success("Product Deleted Successfully!");
        navigate("/products");
    }else{
        toast.error("Something Error!");
        
    }
  }
  return {deleteProduct}
}
export default useDeleteProduct