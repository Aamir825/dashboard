import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000/"
});

export const GetProducts = () =>{
    return api.get("products");
}

export const CreateProduct = (data) =>{
    return api.post("products",data);
}

export const UpdateProduct = (id,data) =>{
    return api.put(`products/${id}`,data);
}

export const DeleteProduct = (id) =>{
    return api.delete(`products/${id}`);
}
