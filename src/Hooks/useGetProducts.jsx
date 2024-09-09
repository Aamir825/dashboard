import React,{useState,useEffect} from 'react'

function useGetProducts() {

    const [productData, setProductData] = useState();
    useEffect(()=>{
      const fetchData = async() =>{
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();
        setProductData(data);
      }
      fetchData();
    },[productData])
    
    return productData;
}

export default useGetProducts