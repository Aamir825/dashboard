import React from 'react'

export const GetProductDatas = async({params}) =>{
  const id = params.prodID;
  try {
    const response = await fetch(`http://localhost:5000/products/${id}`);
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error)
  }
}
