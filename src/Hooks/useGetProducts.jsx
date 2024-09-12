import React,{useState,useEffect} from 'react'
import { GetProducts } from '../Services/GetService';

function useGetProducts() {

    const [productData, setProductData] = useState();
    const fetchData = async() =>{
      try {
        const response = await GetProducts();
        setProductData(response.data);
      } catch (error) {
        console.log(error)
      }
      
    }
    useEffect(()=>{
      fetchData();
    },[productData])
    
    return productData;
}

export default useGetProducts