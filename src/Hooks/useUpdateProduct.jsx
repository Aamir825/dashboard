import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { toast } from "react-toastify";

function useUpdateProduct() {

  const prodData = useLoaderData();
  const navigate = useNavigate();
  const {name,description,status,price} = prodData;
  const [uproduct, setUproduct] = useState({
    name: name,
    description: description,
    status: status,
    price: price
  });

  const updateProduct = async() =>{
    const response = await fetch(`http://localhost:5000/products/${prodData.id}`,{
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(uproduct),
    });

    if(response.ok){
        toast.success("Data Updated Successfully!");
        navigate("/products");
    }else{
      toast.error("Something Error!");
    }

  }
  return {uproduct, setUproduct, updateProduct}
}

export default useUpdateProduct