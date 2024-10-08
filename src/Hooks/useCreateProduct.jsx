import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CreateProduct } from "../Services/GetService";

function useCreateProduct() {
    
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    status: "",
    price: "",
  });

  const createProduct = async () => {
    try {
      const response = await CreateProduct(product);
      if(response){
        toast.success("Data Added Successfully!");
        navigate("/products");
      }
    } catch (error) {
      toast.error("Something went Wrong!");
    }
    // const response = await fetch("http://localhost:5000/products", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // if (response.ok) {
    //   setProduct({
    //     name: "",
    //     description: "",
    //     status: "",
    //     price: "",
    //   });
    //   toast.success("Data Added Successfully!");
    //   navigate("/products");
    // } else {
    //   toast.error("Something went Wrong!");
    // }
  };
  return {product,setProduct,createProduct}
}

export default useCreateProduct;
